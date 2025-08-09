module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:8080/'],
      startServerCommand: 'npm run preview',
      startServerReadyPattern: 'preview server started',
      startServerReadyTimeout: 30000,
    },
    assert: {
      assertions: {
        // Performance thresholds
        'categories:performance': ['error', { minScore: 0.85 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],

        // Core Web Vitals
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],

        // Resource hints
        'uses-rel-preconnect': 'off',
        'uses-rel-preload': 'off',

        // Not applicable for SPA
        'installable-manifest': 'off',
        'splash-screen': 'off',
        'themed-omnibox': 'off',

        // Security
        'is-on-https': 'off', // Development only
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
    server: {
      port: 9009,
      storage: '.lighthouseci',
    },
  },
};
