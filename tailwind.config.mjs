/** @type {import('tailwindcss').Config} */

function cv(name) {
  return `rgb(var(--color-${name}) / <alpha-value>)`;
}

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Material Design 3 Color Tokens (CSS variable based)
        primary: cv('primary'),
        'primary-dim': cv('primary-dim'),
        'primary-container': cv('primary-container'),
        'primary-fixed': cv('primary-fixed'),
        'primary-fixed-dim': cv('primary-fixed-dim'),
        'on-primary': cv('on-primary'),
        'on-primary-container': cv('on-primary-container'),
        'on-primary-fixed': cv('on-primary-fixed'),
        'on-primary-fixed-variant': cv('on-primary-fixed-variant'),

        secondary: cv('secondary'),
        'secondary-dim': cv('secondary-dim'),
        'secondary-container': cv('secondary-container'),
        'secondary-fixed': cv('secondary-fixed'),
        'secondary-fixed-dim': cv('secondary-fixed-dim'),
        'on-secondary': cv('on-secondary'),
        'on-secondary-container': cv('on-secondary-container'),
        'on-secondary-fixed': cv('on-secondary-fixed'),
        'on-secondary-fixed-variant': cv('on-secondary-fixed-variant'),

        tertiary: cv('tertiary'),
        'tertiary-dim': cv('tertiary-dim'),
        'tertiary-container': cv('tertiary-container'),
        'tertiary-fixed': cv('tertiary-fixed'),
        'tertiary-fixed-dim': cv('tertiary-fixed-dim'),
        'on-tertiary': cv('on-tertiary'),
        'on-tertiary-container': cv('on-tertiary-container'),
        'on-tertiary-fixed': cv('on-tertiary-fixed'),
        'on-tertiary-fixed-variant': cv('on-tertiary-fixed-variant'),

        error: cv('error'),
        'error-dim': cv('error-dim'),
        'error-container': cv('error-container'),
        'on-error': cv('on-error'),
        'on-error-container': cv('on-error-container'),

        surface: cv('surface'),
        'surface-dim': cv('surface-dim'),
        'surface-bright': cv('surface-bright'),
        'surface-variant': cv('surface-variant'),
        'surface-tint': cv('surface-tint'),
        'surface-container-lowest': cv('surface-container-lowest'),
        'surface-container-low': cv('surface-container-low'),
        'surface-container': cv('surface-container'),
        'surface-container-high': cv('surface-container-high'),
        'surface-container-highest': cv('surface-container-highest'),

        background: cv('background'),
        'on-background': cv('on-background'),
        'on-surface': cv('on-surface'),
        'on-surface-variant': cv('on-surface-variant'),

        outline: cv('outline'),
        'outline-variant': cv('outline-variant'),

        'inverse-surface': cv('inverse-surface'),
        'inverse-on-surface': cv('inverse-on-surface'),
        'inverse-primary': cv('inverse-primary'),
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', 'Inter', 'system-ui', 'sans-serif'],
        headline: ['Pretendard Variable', 'Pretendard', 'Inter', 'sans-serif'],
        body: ['Pretendard Variable', 'Pretendard', 'Inter', 'sans-serif'],
        label: ['Pretendard Variable', 'Pretendard', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
    },
  },
  plugins: [],
};
