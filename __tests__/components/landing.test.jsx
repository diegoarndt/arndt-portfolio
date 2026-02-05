import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Landing from '../../components/landing';

const mockTranslation = {
  jobTitle: 'Frontend Engineer',
};

describe('Landing', () => {
  beforeEach(() => {
    // Create the main-section element that Landing interacts with
    const mainSection = document.createElement('section');
    mainSection.className = 'main-section';
    document.body.appendChild(mainSection);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renders the name "DIEGO ARNDT"', () => {
    render(<Landing translation={mockTranslation} />);
    expect(screen.getByText('DIEGO ARNDT')).toBeInTheDocument();
  });

  it('renders the job title', () => {
    render(<Landing translation={mockTranslation} />);
    expect(screen.getByText('Frontend Engineer (Angular)')).toBeInTheDocument();
  });

  it('renders as an h1 element for the job title', () => {
    render(<Landing translation={mockTranslation} />);
    const title = screen.getByText('Frontend Engineer (Angular)');
    expect(title.tagName).toBe('H1');
  });

  it('renders the availability status text', () => {
    render(<Landing translation={mockTranslation} />);
    expect(
      screen.getByText(/Open to remote frontend engineer roles/)
    ).toBeInTheDocument();
  });

  it('renders the green availability indicator dots', () => {
    const { container } = render(<Landing translation={mockTranslation} />);
    const pulsingDots = container.querySelectorAll('.bg-green-400, .bg-green-500');
    expect(pulsingDots.length).toBeGreaterThan(0);
  });

  it('adds landing-section class to main-section on hover', async () => {
    render(<Landing translation={mockTranslation} />);

    // Wait for useEffect to run and find the main-section
    const gradientSpan = screen.getByText('DIEGO ARNDT').parentElement.querySelector(
      'span:last-child'
    );

    fireEvent.mouseEnter(gradientSpan);

    const mainSection = document.querySelector('.main-section');
    expect(mainSection.classList.contains('landing-section')).toBe(true);
  });

  it('removes landing-section class from main-section on mouse leave', () => {
    render(<Landing translation={mockTranslation} />);

    const gradientSpan = screen.getByText('DIEGO ARNDT').parentElement.querySelector(
      'span:last-child'
    );

    fireEvent.mouseEnter(gradientSpan);
    fireEvent.mouseLeave(gradientSpan);

    const mainSection = document.querySelector('.main-section');
    expect(mainSection.classList.contains('landing-section')).toBe(false);
  });

  it('renders the name inside an h2 element', () => {
    render(<Landing translation={mockTranslation} />);
    const name = screen.getByText('DIEGO ARNDT');
    // It's inside a span inside an h2 (mocked motion.h2 → h2)
    expect(name.closest('h2')).toBeInTheDocument();
  });
});
