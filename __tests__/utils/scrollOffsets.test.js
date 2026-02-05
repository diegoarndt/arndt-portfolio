import { describe, it, expect } from 'vitest';
import { getScrollOffset } from '../../utils/scrollOffsets';

describe('getScrollOffset', () => {
  it('returns -500 for the landing section', () => {
    expect(getScrollOffset('landing')).toBe(-500);
  });

  it('returns correct offset for the contact section', () => {
    expect(getScrollOffset('contact')).toBe(-80 - -80);
  });

  it('returns correct offset for the skills section', () => {
    expect(getScrollOffset('skills')).toBe(-80 - -80);
  });

  it('returns correct offset for the career section', () => {
    expect(getScrollOffset('career')).toBe(-80 - -80);
  });

  it('returns -NAV_HEIGHT for an unknown section (no extra offset)', () => {
    expect(getScrollOffset('about')).toBe(-80);
  });

  it('returns -NAV_HEIGHT for a completely unknown id', () => {
    expect(getScrollOffset('nonexistent')).toBe(-80);
  });

  it('returns -NAV_HEIGHT for an empty string', () => {
    expect(getScrollOffset('')).toBe(-80);
  });

  it('returns -NAV_HEIGHT for undefined input', () => {
    expect(getScrollOffset(undefined)).toBe(-80);
  });
});
