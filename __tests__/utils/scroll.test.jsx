import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ScrollLink from '../../utils/scroll';

describe('ScrollLink', () => {
  beforeEach(() => {
    // Setup a target element in the DOM
    const target = document.createElement('div');
    target.id = 'about';
    Object.defineProperty(target, 'offsetTop', { value: 500, configurable: true, writable: true });
    Object.defineProperty(target, 'offsetHeight', { value: 400, configurable: true, writable: true });
    target.getBoundingClientRect = vi.fn().mockReturnValue({
      top: 500,
      bottom: 900,
      left: 0,
      right: 100,
      width: 100,
      height: 400,
    });
    document.body.appendChild(target);

    // Mock window methods
    window.scrollTo = vi.fn();
    Object.defineProperty(window, 'pageYOffset', { value: 0, writable: true, configurable: true });

    // Mock replaceState
    vi.spyOn(window.history, 'replaceState').mockImplementation(() => {});
  });

  afterEach(() => {
    document.body.innerHTML = '';
    vi.restoreAllMocks();
  });

  it('renders children content inside a button', () => {
    render(
      <ScrollLink to='about'>
        <span>About</span>
      </ScrollLink>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders as a button element with type button', () => {
    render(<ScrollLink to='about'>Click me</ScrollLink>);
    const button = screen.getByRole('button');
    expect(button.tagName).toBe('BUTTON');
    expect(button.type).toBe('button');
  });

  it('calls window.history.replaceState on click for non-landing section', () => {
    render(<ScrollLink to='about'>About</ScrollLink>);
    fireEvent.click(screen.getByRole('button'));
    expect(window.history.replaceState).toHaveBeenCalledWith(
      null,
      '',
      expect.stringContaining('#about')
    );
  });

  it('does not include hash for landing section', () => {
    const landingEl = document.createElement('div');
    landingEl.id = 'landing';
    landingEl.getBoundingClientRect = vi.fn().mockReturnValue({ top: 0 });
    Object.defineProperty(landingEl, 'offsetTop', { value: 0, configurable: true, writable: true });
    Object.defineProperty(landingEl, 'offsetHeight', { value: 800, configurable: true, writable: true });
    document.body.appendChild(landingEl);

    render(<ScrollLink to='landing'>Home</ScrollLink>);
    fireEvent.click(screen.getByRole('button'));
    expect(window.history.replaceState).toHaveBeenCalledWith(
      null,
      '',
      expect.not.stringContaining('#')
    );
  });

  it('calls window.scrollTo on click', () => {
    render(<ScrollLink to='about'>About</ScrollLink>);
    fireEvent.click(screen.getByRole('button'));
    expect(window.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({ behavior: 'smooth' })
    );
  });

  it('invokes onClickCallback when provided', () => {
    vi.useFakeTimers();
    const callback = vi.fn();
    render(
      <ScrollLink to='about' onClickCallback={callback}>
        About
      </ScrollLink>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(callback).toHaveBeenCalled();
    vi.useRealTimers();
  });

  it('renders a span wrapping the children', () => {
    const { container } = render(<ScrollLink to='about'>About</ScrollLink>);
    const span = container.querySelector('span');
    expect(span).toBeInTheDocument();
    expect(span.textContent).toBe('About');
  });

  it('cleans up scroll event listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
    const { unmount } = render(<ScrollLink to='about'>About</ScrollLink>);
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });
});
