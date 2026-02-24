/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base colors - Dark luxury
        bg: {
          primary: '#050505',
          secondary: '#0A0A0A',
          tertiary: '#111111',
        },
        // Glass opacities
        glass: {
          subtle: 'rgba(255, 255, 255, 0.03)',
          light: 'rgba(255, 255, 255, 0.08)',
          medium: 'rgba(255, 255, 255, 0.12)',
          strong: 'rgba(255, 255, 255, 0.18)',
        },
        // Gold luxury accents
        gold: {
          primary: '#D4AF37',
          light: '#E5C558',
          dark: '#B8952E',
          glow: 'rgba(212, 175, 55, 0.6)',
        },
        // Gradient accents (futuristic)
        accent: {
          pink: '#E91E63',
          cyan: '#00BCD4',
          purple: '#9D00FF',
          blue: '#00BFFF',
        },
        // Text colors
        text: {
          primary: 'rgba(255, 255, 255, 0.95)',
          secondary: 'rgba(255, 255, 255, 0.7)',
          tertiary: 'rgba(255, 255, 255, 0.5)',
          muted: 'rgba(255, 255, 255, 0.3)',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"Inter"',
          'sans-serif',
        ],
      },
      fontSize: {
        'headline': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'body': ['clamp(0.9375rem, 2vw, 1rem)', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'label': ['0.8125rem', { letterSpacing: '0.02em', textTransform: 'uppercase', fontWeight: '500' }],
      },
      borderRadius: {
        'xl': '28px',
        '2xl': '32px',
      },
      boxShadow: {
        'glass': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'glass-hover': '0 8px 40px rgba(0, 0, 0, 0.5)',
        'gold': '0 4px 24px rgba(212, 175, 55, 0.4)',
        'gold-hover': '0 8px 32px rgba(212, 175, 55, 0.5)',
        'glow': '0 0 40px rgba(212, 175, 55, 0.3)',
        'glow-strong': '0 0 60px rgba(212, 175, 55, 0.5)',
      },
      animation: {
        'fade-in': 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)' },
        },
      },
      backdropBlur: {
        glass: '40px',
        'glass-sm': '24px',
        'glass-lg': '48px',
      },
    },
  },
  plugins: [],
}
