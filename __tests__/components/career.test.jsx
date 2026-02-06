import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Career from '../../components/career';

const mockTranslation = {
  careerTitle: 'Career Timeline',
  current: 'Current',
  brazil: 'Brazil',
  canada: 'Canada',
  usa: 'USA',
  germany: 'Germany',
  humberTitle: 'Institute of Technology & Advanced Learning',
  humberDescription: 'Web Design and Development program',
  veralogicaDescription: 'Led Angular frontend development',
  vailTitle: 'Mountain Resorts',
  vailDescription: 'Seasonal role at Heavenly Mountain Resort',
  furbTitle: 'Regional University of Blumenau',
  furbDescription: "Bachelor's degree, Information Systems",
  telekomTitle: 'Information Technology Company',
  telekomDescription: 'Progressed from Intern to Support Analyst',
  senaiTitle: 'National Service for Industrial Training',
  senaiDescription: 'Vocational Program, Software Systems Development',
};

describe('Career', () => {
  it('renders the career timeline heading', () => {
    render(<Career translation={mockTranslation} isLgScreen={true} />);
    expect(screen.getByText('Career Timeline')).toBeInTheDocument();
  });

  it('renders the heading as an h2', () => {
    render(<Career translation={mockTranslation} isLgScreen={true} />);
    const heading = screen.getByText('Career Timeline');
    expect(heading.tagName).toBe('H2');
  });

  it('renders all 6 career entries', () => {
    render(<Career translation={mockTranslation} isLgScreen={true} />);
    expect(screen.getByText('Humber College')).toBeInTheDocument();
    expect(screen.getByText('Veralogica GmbH')).toBeInTheDocument();
    expect(screen.getByText('Vail Resorts')).toBeInTheDocument();
    expect(screen.getByText('FURB')).toBeInTheDocument();
    expect(screen.getByText('T-Systems')).toBeInTheDocument();
    expect(screen.getByText('SENAI')).toBeInTheDocument();
  });

  it('renders subtitles from translations', () => {
    render(<Career translation={mockTranslation} isLgScreen={true} />);
    expect(screen.getByText('(Institute of Technology & Advanced Learning)')).toBeInTheDocument();
    expect(screen.getByText('(Mountain Resorts)')).toBeInTheDocument();
    expect(screen.getByText('(Regional University of Blumenau)')).toBeInTheDocument();
    expect(screen.getByText('(Information Technology Company)')).toBeInTheDocument();
    expect(screen.getByText('(National Service for Industrial Training)')).toBeInTheDocument();
  });

  it('renders career descriptions from translations', () => {
    render(<Career translation={mockTranslation} isLgScreen={true} />);
    expect(screen.getByText('Web Design and Development program')).toBeInTheDocument();
    expect(screen.getByText('Led Angular frontend development')).toBeInTheDocument();
    expect(screen.getByText('Seasonal role at Heavenly Mountain Resort')).toBeInTheDocument();
    expect(screen.getByText("Bachelor's degree, Information Systems")).toBeInTheDocument();
    expect(screen.getByText('Progressed from Intern to Support Analyst')).toBeInTheDocument();
    expect(screen.getByText('Vocational Program, Software Systems Development')).toBeInTheDocument();
  });

  it('renders location flags', () => {
    render(<Career translation={mockTranslation} isLgScreen={true} />);
    expect(screen.getByText('🇨🇦')).toBeInTheDocument();
    expect(screen.getAllByText('🇧🇷').length).toBe(3);
    expect(screen.getByText('🇺🇸')).toBeInTheDocument();
    expect(screen.getByText('🇩🇪')).toBeInTheDocument();
  });

  it('renders organization links with correct hrefs', () => {
    render(<Career translation={mockTranslation} isLgScreen={true} />);
    const links = screen.getAllByRole('link', { name: /^Visit .+ website$/ });
    expect(links.length).toBe(6);

    const hrefs = links.map((link) => link.href);
    expect(hrefs).toContain('https://www.humber.ca/');
    expect(hrefs).toContain('https://www.veralogica.com/');
    expect(hrefs).toContain('https://www.vailresorts.com/');
    expect(hrefs).toContain('https://www.furb.br/');
    expect(hrefs).toContain('https://www.t-systems.com/');
    expect(hrefs).toContain('https://www.sc.senai.br/');
  });

  it('renders organization links with target _blank', () => {
    render(<Career translation={mockTranslation} isLgScreen={true} />);
    const links = screen.getAllByRole('link', { name: /^Visit .+ website$/ });
    links.forEach((link) => {
      expect(link.target).toBe('_blank');
      expect(link.rel).toBe('noopener noreferrer');
    });
  });

  it('renders period information with "Current"', () => {
    render(<Career translation={mockTranslation} isLgScreen={true} />);
    expect(screen.getByText(/2021 - Current/)).toBeInTheDocument();
  });

  it('renders location with translated country names', () => {
    render(<Career translation={mockTranslation} isLgScreen={true} />);
    expect(screen.getByText(/Toronto, ON, Canada/)).toBeInTheDocument();
    expect(screen.getByText(/Frankfurt, HE, Germany/)).toBeInTheDocument();
    expect(screen.getByText(/South Lake Tahoe, CA, USA/)).toBeInTheDocument();
  });

  it('renders organization logo images', () => {
    render(<Career translation={mockTranslation} isLgScreen={true} />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThanOrEqual(6);
  });

  it('uses translated heading', () => {
    render(
      <Career
        translation={{ ...mockTranslation, careerTitle: 'Linha do Tempo' }}
        isLgScreen={true}
      />
    );
    expect(screen.getByText('Linha do Tempo')).toBeInTheDocument();
  });
});
