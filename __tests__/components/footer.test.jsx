import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from '../../components/footer';

const mockTranslation = {
  handcrafted: 'Handcrafted by Diego Arndt',
};

const mockProps = {
  locale: 'en',
};

describe('Footer', () => {
  it('renders the footer element', () => {
    const { container } = render(<Footer props={mockProps} translation={mockTranslation} />);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('renders the GitHub link with correct href', () => {
    render(<Footer props={mockProps} translation={mockTranslation} />);
    const githubLink = screen.getByLabelText('Github profile');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.href).toBe('https://github.com/diegoarndt');
  });

  it('renders the LinkedIn link with correct href', () => {
    render(<Footer props={mockProps} translation={mockTranslation} />);
    const linkedinLink = screen.getByLabelText('LinkedIn profile');
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink.href).toBe('https://www.linkedin.com/in/diegoarndt');
  });

  it('renders social links with target _blank', () => {
    render(<Footer props={mockProps} translation={mockTranslation} />);
    const githubLink = screen.getByLabelText('Github profile');
    const linkedinLink = screen.getByLabelText('LinkedIn profile');
    expect(githubLink.target).toBe('_blank');
    expect(linkedinLink.target).toBe('_blank');
  });

  it('renders social links with noopener noreferrer', () => {
    render(<Footer props={mockProps} translation={mockTranslation} />);
    const githubLink = screen.getByLabelText('Github profile');
    const linkedinLink = screen.getByLabelText('LinkedIn profile');
    expect(githubLink.rel).toBe('noopener noreferrer');
    expect(linkedinLink.rel).toBe('noopener noreferrer');
  });

  it('renders the handcrafted translation text', () => {
    render(<Footer props={mockProps} translation={mockTranslation} />);
    expect(screen.getByText(/Handcrafted by Diego Arndt/)).toBeInTheDocument();
  });

  it('renders the TypeIt quote component', () => {
    render(<Footer props={mockProps} translation={mockTranslation} />);
    expect(screen.getByTestId('typeit')).toBeInTheDocument();
  });

  it('renders copyright symbol', () => {
    render(<Footer props={mockProps} translation={mockTranslation} />);
    expect(screen.getByText(/©/)).toBeInTheDocument();
  });

  it('renders with different translation', () => {
    render(
      <Footer
        props={mockProps}
        translation={{ handcrafted: 'Feito à mão por Diego Arndt' }}
      />
    );
    expect(screen.getByText(/Feito à mão por Diego Arndt/)).toBeInTheDocument();
  });

  it('passes locale to YearInWords component', () => {
    const { container } = render(
      <Footer props={{ locale: 'pt' }} translation={mockTranslation} />
    );
    // For non-English locale, YearInWords renders numeric year
    expect(container.textContent).toMatch(/\d{4}/);
  });
});
