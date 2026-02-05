import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Skills from '../../components/skills';

const mockTranslation = {
  hardSkills: 'Key Technical Skills',
};

describe('Skills', () => {
  it('renders the section heading from translation', () => {
    render(<Skills translation={mockTranslation} />);
    expect(screen.getByText('Key Technical Skills')).toBeInTheDocument();
  });

  it('renders all 6 skill groups', () => {
    render(<Skills translation={mockTranslation} />);
    expect(screen.getByText('Frontend Core')).toBeInTheDocument();
    expect(screen.getByText('UI Engineering')).toBeInTheDocument();
    expect(screen.getByText('Backend & Infra (working knowledge)')).toBeInTheDocument();
    expect(screen.getByText('Testing')).toBeInTheDocument();
    expect(screen.getByText('Product & Collaboration')).toBeInTheDocument();
    expect(screen.getByText('Tooling & Workflow')).toBeInTheDocument();
  });

  it('renders Frontend Core skills', () => {
    render(<Skills translation={mockTranslation} />);
    expect(screen.getByText('Angular')).toBeInTheDocument();
    expect(screen.getByText('JavaScript (ES6+) & TypeScript')).toBeInTheDocument();
    expect(screen.getByText('RxJS (observable patterns and async data flows)')).toBeInTheDocument();
  });

  it('renders UI Engineering skills', () => {
    render(<Skills translation={mockTranslation} />);
    expect(screen.getByText('HTML & CSS (SCSS)')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS & responsive design')).toBeInTheDocument();
    expect(screen.getByText('Accessibility (a11y)')).toBeInTheDocument();
  });

  it('renders Backend & Infra skills', () => {
    render(<Skills translation={mockTranslation} />);
    expect(screen.getByText('REST APIs (consumption & integration)')).toBeInTheDocument();
    expect(screen.getByText('AWS (Cloud Practitioner certified)')).toBeInTheDocument();
    expect(screen.getByText('CI/CD pipelines (usage & troubleshooting)')).toBeInTheDocument();
    expect(screen.getByText('Docker (daily usage)')).toBeInTheDocument();
  });

  it('renders Testing skills', () => {
    render(<Skills translation={mockTranslation} />);
    expect(screen.getByText('Unit testing')).toBeInTheDocument();
    expect(screen.getByText('Integration testing')).toBeInTheDocument();
    expect(screen.getByText('E2E testing')).toBeInTheDocument();
  });

  it('renders Product & Collaboration skills', () => {
    render(<Skills translation={mockTranslation} />);
    expect(screen.getByText('Agile/Scrum methodologies')).toBeInTheDocument();
    expect(screen.getByText('Requirement analysis')).toBeInTheDocument();
    expect(screen.getByText('Client-facing communication')).toBeInTheDocument();
    expect(screen.getByText('Feature scoping & validation')).toBeInTheDocument();
    expect(screen.getByText('UX collaboration & UI design')).toBeInTheDocument();
    expect(screen.getByText('Problem-solving & debugging')).toBeInTheDocument();
  });

  it('renders Tooling & Workflow skills', () => {
    render(<Skills translation={mockTranslation} />);
    expect(screen.getByText('Git & GitHub')).toBeInTheDocument();
    expect(screen.getByText('Jira & Confluence')).toBeInTheDocument();
    expect(screen.getByText('VS Code')).toBeInTheDocument();
    expect(screen.getByText('Draw.io')).toBeInTheDocument();
    expect(screen.getByText('AI-assisted development (human-reviewed & validated)')).toBeInTheDocument();
  });

  it('renders skill items as list items', () => {
    const { container } = render(<Skills translation={mockTranslation} />);
    const listItems = container.querySelectorAll('li');
    // 3 + 3 + 4 + 3 + 6 + 5 = 24 total skill items
    expect(listItems.length).toBe(24);
  });

  it('renders heading as an h2 element', () => {
    render(<Skills translation={mockTranslation} />);
    const heading = screen.getByText('Key Technical Skills');
    expect(heading.tagName).toBe('H2');
  });

  it('uses different translation for heading', () => {
    render(<Skills translation={{ hardSkills: 'Habilidades Técnicas' }} />);
    expect(screen.getByText('Habilidades Técnicas')).toBeInTheDocument();
  });
});
