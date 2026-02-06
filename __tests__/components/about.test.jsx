import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import About from '../../components/about';

const mockTranslation = {
  about: 'About',
};

describe('About', () => {
  it('renders the profile image', () => {
    render(<About translation={mockTranslation} />);
    const image = screen.getByAltText('Diego Arndt smiling in a professional photo');
    expect(image).toBeInTheDocument();
  });

  it('renders the profile image with correct alt text', () => {
    render(<About translation={mockTranslation} />);
    const image = screen.getByAltText('Diego Arndt smiling in a professional photo');
    expect(image.alt).toBe('Diego Arndt smiling in a professional photo');
  });

  it('renders the "How I Work" heading', () => {
    render(<About translation={mockTranslation} />);
    expect(screen.getByText('How I Work')).toBeInTheDocument();
  });

  it('renders the heading as an h2', () => {
    render(<About translation={mockTranslation} />);
    const heading = screen.getByText('How I Work');
    expect(heading.tagName).toBe('H2');
  });

  it('renders the bio text about Frontend Engineer experience', () => {
    render(<About translation={mockTranslation} />);
    expect(
      screen.getByText(/Frontend Engineer with 5\+ years of experience/)
    ).toBeInTheDocument();
  });

  it('renders text about partnering with product and stakeholders', () => {
    render(<About translation={mockTranslation} />);
    expect(
      screen.getByText(/I partner with product and stakeholders/)
    ).toBeInTheDocument();
  });

  it('renders text about REST APIs and AWS', () => {
    render(<About translation={mockTranslation} />);
    expect(
      screen.getByText(/Experienced with REST APIs, CI\/CD, and AWS/)
    ).toBeInTheDocument();
  });

  it('renders three bio paragraphs', () => {
    const { container } = render(<About translation={mockTranslation} />);
    const paragraphs = container.querySelectorAll('.space-y-5 p');
    expect(paragraphs.length).toBe(3);
  });
});
