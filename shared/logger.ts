// Structured logging utility for both server and client
export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  DEBUG = 3,
}

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: Record<string, any>;
  error?: { name: string; message: string; stack?: string };
  userId?: string;
  requestId?: string;
  userAgent?: string;
  ip?: string;
  url?: string;
}

export class Logger {
  private context: Record<string, any> = {};
  private logLevel: LogLevel;

  constructor(logLevel: LogLevel = LogLevel.INFO) {
    this.logLevel = logLevel;
  }

  setContext(context: Record<string, any>): void {
    this.context = { ...this.context, ...context };
  }

  clearContext(): void {
    this.context = {};
  }

  private shouldLog(level: LogLevel): boolean {
    return level <= this.logLevel;
  }

  private formatError(error: Error): { name: string; message: string; stack?: string } {
    const base = {
      name: error.name,
      message: error.message,
    } as { name: string; message: string; stack?: string };
    if (typeof error.stack === 'string') {
      base.stack = error.stack;
    }
    return base;
  }

  private createLogEntry(
    level: LogLevel,
    message: string,
    context?: Record<string, any>,
    error?: Error
  ): LogEntry {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      context: { ...this.context, ...context },
    };

    if (error) {
      entry.error = this.formatError(error);
    }

    // Add browser context if available (client-side)
    if (typeof window !== 'undefined') {
      entry.userAgent = navigator.userAgent;
      entry.url = window.location.href;
    }

    return entry;
  }

  private log(entry: LogEntry): void {
    if (!this.shouldLog(entry.level)) return;

    const levelStr = LogLevel[entry.level];
    const prefix = `[${entry.timestamp}] ${levelStr}:`;

    // Console output with appropriate styling
    switch (entry.level) {
      case LogLevel.ERROR:
        console.error(prefix, entry.message, entry.context, entry.error);
        break;
      case LogLevel.WARN:
        console.warn(prefix, entry.message, entry.context);
        break;
      case LogLevel.INFO:
        console.info(prefix, entry.message, entry.context);
        break;
      case LogLevel.DEBUG:
        console.debug(prefix, entry.message, entry.context);
        break;
    }

    // Send to external logging service in production
    if (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') {
      this.sendToExternalService(entry);
    }
  }

  private async sendToExternalService(entry: LogEntry): Promise<void> {
    try {
      // This would be replaced with actual logging service (e.g., Sentry, LogRocket, etc.)
      // For now, just structure the data for external consumption
      const structured = {
        '@timestamp': entry.timestamp,
        level: LogLevel[entry.level].toLowerCase(),
        message: entry.message,
        ...entry.context,
        error: entry.error,
        metadata: {
          userAgent: entry.userAgent,
          url: entry.url,
          userId: entry.userId,
          requestId: entry.requestId,
          ip: entry.ip,
        },
      };

      // TODO: Send to actual logging service
      // await fetch('/api/logs', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(structured)
      // });

      console.debug('Would send to logging service:', structured);
    } catch (error) {
      console.error('Failed to send log to external service:', error);
    }
  }

  error(message: string, context?: Record<string, any>, error?: Error): void {
    this.log(this.createLogEntry(LogLevel.ERROR, message, context, error));
  }

  warn(message: string, context?: Record<string, any>): void {
    this.log(this.createLogEntry(LogLevel.WARN, message, context));
  }

  info(message: string, context?: Record<string, any>): void {
    this.log(this.createLogEntry(LogLevel.INFO, message, context));
  }

  debug(message: string, context?: Record<string, any>): void {
    this.log(this.createLogEntry(LogLevel.DEBUG, message, context));
  }

  // Performance logging
  time(label: string): void {
    console.time(label);
  }

  timeEnd(label: string, context?: Record<string, any>): void {
    console.timeEnd(label);
    this.debug(`Performance: ${label} completed`, context);
  }

  // User action tracking
  userAction(action: string, context?: Record<string, any>): void {
    this.info(`User action: ${action}`, { type: 'user_action', ...context });
  }

  // API request logging
  apiRequest(method: string, url: string, context?: Record<string, any>): void {
    this.debug(`API ${method} ${url}`, { type: 'api_request', method, url, ...context });
  }

  apiResponse(
    method: string,
    url: string,
    status: number,
    duration: number,
    context?: Record<string, any>
  ): void {
    this.info(`API ${method} ${url} ${status} (${duration}ms)`, {
      type: 'api_response',
      method,
      url,
      status,
      duration,
      ...context,
    });
  }
}

// Global logger instances
export const logger = new Logger(
  typeof process !== 'undefined' && process.env.NODE_ENV === 'development'
    ? LogLevel.DEBUG
    : LogLevel.INFO
);

// Express middleware for request logging
export function requestLogger(req: any, res: any, next: any): void {
  const start = Date.now();
  const requestId = Math.random().toString(36).substring(7);

  // Add request context to logger
  logger.setContext({
    requestId,
    ip: req.ip || req.connection.remoteAddress,
    userAgent: req.get('User-Agent'),
  });

  logger.apiRequest(req.method, req.originalUrl, {
    headers: req.headers,
    body: req.body,
  });

  // Log response
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.apiResponse(req.method, req.originalUrl, res.statusCode, duration);
    logger.clearContext();
  });

  next();
}

// Error logging middleware
export function errorLogger(err: Error, req: any, _res: any, next: any): void {
  logger.error(
    'Unhandled server error',
    {
      url: req.originalUrl,
      method: req.method,
      userAgent: req.get('User-Agent'),
      ip: req.ip,
    },
    err
  );

  next(err);
}

// Unhandled promise rejection handler
if (typeof process !== 'undefined') {
  process.on('unhandledRejection', (reason, promise) => {
    logger.error(
      'Unhandled Promise Rejection',
      {
        reason: reason instanceof Error ? reason.message : String(reason),
        promise: String(promise),
      },
      reason instanceof Error ? reason : new Error(String(reason))
    );
  });

  process.on('uncaughtException', (error) => {
    logger.error('Uncaught Exception', {}, error);
    process.exit(1);
  });
}
