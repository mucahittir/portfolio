/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

// Design tokens live here as RGB triplets so Tailwind opacity modifiers work
// (e.g. `border-ink/10`). Neutral "ink" ramp: tinted toward night / terminal.
const light = {
  '--page': '245 247 250',
  '--card': '255 255 255',
  '--raised': '236 239 244',
  '--ink': '17 24 39',
  '--ink-2': '75 85 101',
  '--ink-3': '107 116 135',
  '--accent': '14 116 144',
  '--positive': '22 163 74',
};

const dark = {
  '--page': '11 13 20',
  '--card': '17 20 28',
  '--raised': '26 30 40',
  '--ink': '238 240 245',
  '--ink-2': '163 169 184',
  '--ink-3': '122 130 150',
  '--accent': '6 182 212',
  '--positive': '76 195 138',
};

const token = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        page: token('--page'),
        card: token('--card'),
        raised: token('--raised'),
        ink: token('--ink'),
        ink2: token('--ink-2'),
        ink3: token('--ink-3'),
        accent: token('--accent'),
        positive: token('--positive'),
      },
      fontFamily: {
        sans: ['"Geist Variable"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Geist Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '500' }],
        title: ['clamp(1.75rem, 3.5vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '500' }],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        ':root': light,
        '.dark': dark,
      });
    }),
  ],
};
