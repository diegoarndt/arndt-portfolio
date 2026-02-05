import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';
import React from 'react';

// ─── Mock next/image ────────────────────────────────────────────────────────────
vi.mock('next/image', () => ({
  __esModule: true,
  default: ({ fill, priority, ...rest }) => {
    void fill;
    void priority;
    const src = typeof rest.src === 'object' ? rest.src.src || '' : rest.src;
    return React.createElement('img', { ...rest, src });
  },
}));

// ─── Mock next/head ─────────────────────────────────────────────────────────────
vi.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }) => React.createElement(React.Fragment, null, children),
}));

// ─── Mock next/link ─────────────────────────────────────────────────────────────
vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...rest }) => React.createElement('a', { href, ...rest }, children),
}));

// ─── Mock framer-motion ─────────────────────────────────────────────────────────
vi.mock('framer-motion', () => ({
  motion: new Proxy(
    {},
    {
      get: (_target, prop) => {
        const Component = React.forwardRef(({ children, ...rest }, ref) => {
          const safeProps = {};
          for (const [key, value] of Object.entries(rest)) {
            if (typeof value !== 'object' || value === null) {
              safeProps[key] = value;
            }
          }
          return React.createElement(prop, { ...safeProps, ref }, children);
        });
        Component.displayName = `motion.${String(prop)}`;
        return Component;
      },
    }
  ),
  AnimatePresence: ({ children }) => React.createElement(React.Fragment, null, children),
  useAnimation: () => ({ start: vi.fn(), stop: vi.fn() }),
  useInView: () => true,
}));

// ─── Mock react-calendly ────────────────────────────────────────────────────────
vi.mock('react-calendly', () => ({
  InlineWidget: ({ url }) =>
    React.createElement('div', { 'data-testid': 'calendly-widget', 'data-url': url }),
}));

// ─── Mock typeit-react ──────────────────────────────────────────────────────────
vi.mock('typeit-react', () => ({
  __esModule: true,
  default: ({ getBeforeInit }) => {
    const quotes = [];
    if (getBeforeInit) {
      const mockInstance = {
        type: (text) => {
          quotes.push(text);
          return mockInstance;
        },
        pause: () => mockInstance,
        delete: () => mockInstance,
      };
      getBeforeInit(mockInstance);
    }
    return React.createElement('div', { 'data-testid': 'typeit' }, quotes[0] || '');
  },
}));

// ─── Mock react-icons ───────────────────────────────────────────────────────────
vi.mock('react-icons/ai', () => ({
  AiFillLinkedin: () => React.createElement('span', { 'data-testid': 'icon-linkedin' }),
  AiFillGithub: () => React.createElement('span', { 'data-testid': 'icon-github' }),
}));

vi.mock('react-icons/bs', () => ({
  BsFillMoonStarsFill: () => React.createElement('span', { 'data-testid': 'icon-moon' }),
  BsFillSunFill: () => React.createElement('span', { 'data-testid': 'icon-sun' }),
  BsList: () => React.createElement('span', { 'data-testid': 'icon-menu' }),
  BsX: () => React.createElement('span', { 'data-testid': 'icon-close' }),
}));

// ─── Mock canvas-confetti ───────────────────────────────────────────────────────
vi.mock('canvas-confetti', () => ({
  __esModule: true,
  default: vi.fn(),
}));

// ─── Mock react-confetti ────────────────────────────────────────────────────────
vi.mock('react-confetti', () => ({
  __esModule: true,
  default: () => React.createElement('div', { 'data-testid': 'react-confetti' }),
}));

// ─── Mock react-use ─────────────────────────────────────────────────────────────
vi.mock('react-use/', () => ({
  useWindowSize: () => ({ width: 1280, height: 800 }),
}));

// ─── Mock @vercel/analytics ─────────────────────────────────────────────────────
vi.mock('@vercel/analytics/react', () => ({
  Analytics: () => React.createElement('div', { 'data-testid': 'analytics' }),
}));

// ─── Mock static image imports ──────────────────────────────────────────────────
vi.mock('../public/myself.jpg', () => ({ default: { src: '/myself.jpg' } }));
vi.mock('../public/da-logo.png', () => ({ default: { src: '/da-logo.png' } }));
vi.mock('../public/bg-study.jpg', () => ({ default: { src: '/bg-study.jpg' } }));
vi.mock('../public/bg-work.jpg', () => ({ default: { src: '/bg-work.jpg' } }));
vi.mock('../public/bg-wxp.jpg', () => ({ default: { src: '/bg-wxp.jpg' } }));
vi.mock('../public/senai-logo.jpeg', () => ({ default: { src: '/senai-logo.jpeg' } }));
vi.mock('../public/telekom-logo.jpeg', () => ({ default: { src: '/telekom-logo.jpeg' } }));
vi.mock('../public/furb-logo.jpeg', () => ({ default: { src: '/furb-logo.jpeg' } }));
vi.mock('../public/vail-logo.jpeg', () => ({ default: { src: '/vail-logo.jpeg' } }));
vi.mock('../public/veralogica-logo.jpeg', () => ({ default: { src: '/veralogica-logo.jpeg' } }));
vi.mock('../public/humber-logo.jpeg', () => ({ default: { src: '/humber-logo.jpeg' } }));

// ─── Suppress JSDOM navigation errors ───────────────────────────────────────────
const originalConsoleError = console.error;
console.error = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes('Not implemented: navigation')) return;
  originalConsoleError(...args);
};
