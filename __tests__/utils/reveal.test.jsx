import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Reveal from '../../utils/reveal';

describe('Reveal', () => {
  it('renders children content', () => {
    render(
      <Reveal>
        <p>Hello World</p>
      </Reveal>
    );
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders with default width of fit-content', () => {
    const { container } = render(
      <Reveal>
        <span>Content</span>
      </Reveal>
    );
    const wrapper = container.firstChild;
    expect(wrapper.style.width).toBe('fit-content');
  });

  it('renders with custom width when provided', () => {
    const { container } = render(
      <Reveal width='100%'>
        <span>Content</span>
      </Reveal>
    );
    const wrapper = container.firstChild;
    expect(wrapper.style.width).toBe('100%');
  });

  it('renders with relative positioning', () => {
    const { container } = render(
      <Reveal>
        <span>Content</span>
      </Reveal>
    );
    const wrapper = container.firstChild;
    expect(wrapper.style.position).toBe('relative');
  });

  it('renders with overflow hidden', () => {
    const { container } = render(
      <Reveal>
        <span>Content</span>
      </Reveal>
    );
    const wrapper = container.firstChild;
    expect(wrapper.style.overflow).toBe('hidden');
  });

  it('renders multiple children', () => {
    render(
      <Reveal>
        <p>First</p>
        <p>Second</p>
      </Reveal>
    );
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });
});
