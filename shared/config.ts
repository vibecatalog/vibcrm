import { z } from 'zod';

// Environment schema validation
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().transform(Number).pipe(z.number().min(1).max(65535)).default('8080'),

  // URLs
  VITE_APP_URL: z.string().url().default('http://localhost:8080'),
  VITE_API_URL: z.string().url().default('http://localhost:8080/api'),

  // Security
  PING_MESSAGE: z.string().optional().default('pong'),
  ALLOWED_ORIGINS: z
    .string()
    .optional()
    .transform((str) => (str ? str.split(',') : [])),

  // Database
  DATABASE_URL: z.string().url().optional(),
  REDIS_URL: z.string().url().optional(),

  // Authentication
  JWT_SECRET: z.string().min(32).optional(),
  JWT_EXPIRES_IN: z.string().default('24h'),
  REFRESH_TOKEN_SECRET: z.string().min(32).optional(),

  // Email
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().transform(Number).pipe(z.number().min(1).max(65535)).optional(),
  SMTP_USER: z.string().email().optional(),
  SMTP_PASS: z.string().optional(),
  FROM_EMAIL: z.string().email().optional(),

  // External APIs
  OPENAI_API_KEY: z.string().optional(),
  STRIPE_PUBLISHABLE_KEY: z.string().optional(),
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),

  // Analytics & Monitoring
  SENTRY_DSN: z.string().url().optional(),
  GOOGLE_ANALYTICS_ID: z.string().optional(),
  HOTJAR_ID: z.string().optional(),

  // Feature Flags
  VITE_ENABLE_ANALYTICS: z
    .string()
    .transform((str) => str === 'true')
    .default('false'),
  VITE_ENABLE_ERROR_REPORTING: z
    .string()
    .transform((str) => str === 'true')
    .default('false'),
  VITE_MAINTENANCE_MODE: z
    .string()
    .transform((str) => str === 'true')
    .default('false'),
});

export type EnvConfig = z.infer<typeof envSchema>;

// Validate and parse environment variables
function validateEnv(): EnvConfig {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('❌ Environment validation failed:');
      error.errors.forEach((err) => {
        console.error(`  - ${err.path.join('.')}: ${err.message}`);
      });
      process.exit(1);
    }
    throw error;
  }
}

export const config = validateEnv();

// Client-safe config (only VITE_ prefixed variables)
export const clientConfig = {
  APP_URL: config.VITE_APP_URL,
  API_URL: config.VITE_API_URL,
  ENABLE_ANALYTICS: config.VITE_ENABLE_ANALYTICS,
  ENABLE_ERROR_REPORTING: config.VITE_ENABLE_ERROR_REPORTING,
  MAINTENANCE_MODE: config.VITE_MAINTENANCE_MODE,
  NODE_ENV: config.NODE_ENV,
};

// Server-only config
export const serverConfig = {
  ...config,
  // Add computed values
  IS_PRODUCTION: config.NODE_ENV === 'production',
  IS_DEVELOPMENT: config.NODE_ENV === 'development',
  IS_TEST: config.NODE_ENV === 'test',
};

// Utility functions
export const isDevelopment = () => config.NODE_ENV === 'development';
export const isProduction = () => config.NODE_ENV === 'production';
export const isTest = () => config.NODE_ENV === 'test';

// Configuration validation for production
export function validateProductionConfig(): void {
  if (!isProduction()) return;

  const requiredForProduction = ['JWT_SECRET', 'REFRESH_TOKEN_SECRET', 'DATABASE_URL'];

  const missing = requiredForProduction.filter((key) => !config[key as keyof EnvConfig]);

  if (missing.length > 0) {
    console.error('❌ Missing required environment variables for production:');
    missing.forEach((key) => console.error(`  - ${key}`));
    process.exit(1);
  }

  console.log('✅ Production environment validation passed');
}
