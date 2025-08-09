import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

// Cleanup after each test case
afterEach(() => {
  cleanup();
});

// Mock environment variables for tests
vi.mock('@shared/config', () => ({
  clientConfig: {
    APP_URL: 'http://localhost:8080',
    API_URL: 'http://localhost:8080/api',
    ENABLE_ANALYTICS: false,
    ENABLE_ERROR_REPORTING: false,
    MAINTENANCE_MODE: false,
    NODE_ENV: 'test',
  },
  config: {
    NODE_ENV: 'test',
    PORT: 8080,
    VITE_APP_URL: 'http://localhost:8080',
    VITE_API_URL: 'http://localhost:8080/api',
    PING_MESSAGE: 'pong',
    ALLOWED_ORIGINS: [],
    JWT_EXPIRES_IN: '24h',
    VITE_ENABLE_ANALYTICS: false,
    VITE_ENABLE_ERROR_REPORTING: false,
    VITE_MAINTENANCE_MODE: false,
  },
}));

// Mock IntersectionObserver for lazy loading tests
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock window.matchMedia for responsive tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn();

// Add custom matchers
expect.extend({
  toHaveAccessibleName(received, expected) {
    const element = received as HTMLElement;
    const accessibleName =
      element.getAttribute('aria-label') ||
      element.getAttribute('aria-labelledby') ||
      element.textContent;

    const pass = accessibleName === expected;

    return {
      message: () =>
        `expected element to have accessible name "${expected}" but got "${accessibleName}"`,
      pass,
    };
  },
});
