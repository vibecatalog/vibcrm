// Design System Tokens for VibCRM Landing Page

export const designTokens = {
  // Colors
  colors: {
    primary: {
      500: 'hsl(224, 94%, 56%)', // #246BFD
      600: 'hsl(230, 100%, 38%)', // #0040C3
    },
    background: {
      dark: 'hsl(210, 17%, 3%)', // #040B10
      card: 'hsl(210, 30%, 8%)', // #071528
    },
    text: {
      primary: 'hsl(0, 0%, 100%)', // #FFFFFF
      muted: 'hsl(218, 14%, 70%)', // #AFBCD5
      brand: 'hsl(268, 63%, 89%)', // #E7DEFE
    },
    border: {
      subtle: 'rgba(255, 255, 255, 0.16)',
      primary: 'hsl(224, 94%, 56%)',
    },
    success: 'hsl(76, 73%, 45%)', // #9CD323
  },

  // Typography
  typography: {
    fontFamily: {
      sans: ['Satoshi', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      jakarta: [
        'Plus Jakarta Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'sans-serif',
      ],
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      hero: '4.75rem', // 76px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.6',
    },
  },

  // Spacing
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '0.75rem', // 12px
    lg: '1rem', // 16px
    xl: '1.5rem', // 24px
    '2xl': '2rem', // 32px
    '3xl': '3rem', // 48px
    '4xl': '4rem', // 64px
    '5xl': '6rem', // 96px
    '6xl': '8rem', // 128px
    section: '5rem', // 80px - Base section padding
    container: '7.5rem', // 120px - Container padding
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
  },

  // Shadows
  shadows: {
    glow: '4px 8px 24px 0 rgba(36, 107, 253, 0.25)',
    dashboard: '0 44px 244px -70px rgba(36, 107, 253, 0.80)',
  },

  // Border Radius
  borderRadius: {
    sm: '0.25rem', // 4px
    md: '0.5rem', // 8px
    lg: '0.75rem', // 12px
    xl: '1rem', // 16px
    '2xl': '1.5rem', // 24px
    pill: '1.875rem', // 30px
    full: '9999px',
  },

  // Animation
  animation: {
    duration: {
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.5s',
    },
    easing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
    },
  },

  // Layout
  layout: {
    maxWidth: {
      content: '1200px',
      container: '1440px',
    },
    zIndex: {
      background: -1,
      base: 0,
      elevated: 10,
      overlay: 20,
      modal: 30,
      tooltip: 40,
      topmost: 50,
    },
  },
} as const;

// Utility functions for design tokens
export const dt = designTokens;

// Gradient utilities
export const gradients = {
  primary: 'linear-gradient(95deg, #246BFD 13.23%, #0040C3 81.63%)',
  text: 'radial-gradient(70.71% 70.71% at 50% 50%, #FFF 30%, rgba(197, 220, 255, 0.60) 84.77%)',
} as const;

// Component variants
export const componentVariants = {
  button: {
    sizes: {
      sm: 'px-4 py-3 text-sm',
      md: 'px-6 py-4 text-lg',
      lg: 'px-8 py-4 text-xl',
    },
    variants: {
      primary: 'bg-gradient-primary border border-vibcrm-primary text-white hover:opacity-90',
      secondary: 'border border-white/16 text-white hover:bg-white/10',
      ghost: 'text-white hover:bg-white/10',
    },
  },
  card: {
    variants: {
      default: 'rounded-xl bg-vibcrm-card-bg border border-white/16',
      elevated: 'rounded-xl bg-vibcrm-card-bg border border-white/16 shadow-lg',
    },
  },
} as const;
