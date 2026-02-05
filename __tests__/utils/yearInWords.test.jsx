import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

// We need to unmock framer-motion for this file since YearInWords doesn't use it
// but we do need React
import YearInWords from '../../utils/yearInWords';

describe('YearInWords', () => {
  describe('when language is English', () => {
    it('renders the current year in words', () => {
      const { container } = render(<YearInWords language='en' />);
      const span = container.querySelector('span');
      expect(span).toBeInTheDocument();
      // Should contain text (not a number for English locale)
      expect(span.textContent).toMatch(/[a-z]/);
    });

    it('renders "twenty twenty-six" for year 2026', () => {
      vi.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2026);
      const { container } = render(<YearInWords language='en' />);
      expect(container.querySelector('span').textContent).toBe('twenty twenty-six');
      vi.restoreAllMocks();
    });

    it('renders "twenty twenty" for year 2020', () => {
      vi.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2020);
      const { container } = render(<YearInWords language='en' />);
      expect(container.querySelector('span').textContent).toBe('twenty twenty');
      vi.restoreAllMocks();
    });

    it('renders "twenty nineteen" for year 2019', () => {
      vi.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2019);
      const { container } = render(<YearInWords language='en' />);
      expect(container.querySelector('span').textContent).toBe('twenty nineteen');
      vi.restoreAllMocks();
    });

    it('renders "twenty ten" for year 2010', () => {
      vi.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2010);
      const { container } = render(<YearInWords language='en' />);
      expect(container.querySelector('span').textContent).toBe('twenty ten');
      vi.restoreAllMocks();
    });

    it('renders "twenty" for year 2000 (century part only)', () => {
      vi.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2000);
      const { container } = render(<YearInWords language='en' />);
      expect(container.querySelector('span').textContent).toBe('twenty ');
      vi.restoreAllMocks();
    });

    it('renders "nineteen ninety-nine" for year 1999', () => {
      vi.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1999);
      const { container } = render(<YearInWords language='en' />);
      expect(container.querySelector('span').textContent).toBe('nineteen ninety-nine');
      vi.restoreAllMocks();
    });

    it('renders correctly for year with teens (2013)', () => {
      vi.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2013);
      const { container } = render(<YearInWords language='en' />);
      expect(container.querySelector('span').textContent).toBe('twenty thirteen');
      vi.restoreAllMocks();
    });

    it('renders correctly for year ending in 1 (2021)', () => {
      vi.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2021);
      const { container } = render(<YearInWords language='en' />);
      expect(container.querySelector('span').textContent).toBe('twenty twenty-one');
      vi.restoreAllMocks();
    });

    it('renders correctly for year ending in round tens (2030)', () => {
      vi.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2030);
      const { container } = render(<YearInWords language='en' />);
      expect(container.querySelector('span').textContent).toBe('twenty thirty');
      vi.restoreAllMocks();
    });
  });

  describe('when language is not English', () => {
    it('renders numeric year for Portuguese locale', () => {
      vi.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2026);
      const { container } = render(<YearInWords language='pt' />);
      expect(container.querySelector('span').textContent).toBe('2026');
      vi.restoreAllMocks();
    });

    it('renders numeric year for German locale', () => {
      vi.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2026);
      const { container } = render(<YearInWords language='de' />);
      expect(container.querySelector('span').textContent).toBe('2026');
      vi.restoreAllMocks();
    });

    it('renders numeric year for Spanish locale', () => {
      vi.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2026);
      const { container } = render(<YearInWords language='es' />);
      expect(container.querySelector('span').textContent).toBe('2026');
      vi.restoreAllMocks();
    });

    it('renders numeric year for French locale', () => {
      vi.spyOn(Date.prototype, 'getFullYear').mockReturnValue(2026);
      const { container } = render(<YearInWords language='fr' />);
      expect(container.querySelector('span').textContent).toBe('2026');
      vi.restoreAllMocks();
    });
  });
});
