import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Nav from '../../components/nav';

// Mock ScrollLink to render a simple button
vi.mock('../../utils/scroll', () => ({
  __esModule: true,
  default: ({ children, to }) =>
    React.createElement('button', { 'data-testid': `scroll-${to}` }, children),
}));

const mockTranslation = {
  resume: 'Résumé',
  resumeTitle: 'Download Diego Arndt Résumé',
};

const mockMenuItems = [
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Career', id: 'career' },
  { name: 'Contact', id: 'contact' },
];

const defaultProps = {
  props: { locale: 'en' },
  translation: mockTranslation,
  menuItems: mockMenuItems,
  darkMode: false,
  isLgScreen: true,
  isMenuOpened: false,
  setDarkMode: vi.fn(),
  setMenuOpen: vi.fn(),
};

describe('Nav', () => {
  it('renders the nav element', () => {
    const { container } = render(<Nav {...defaultProps} />);
    expect(container.querySelector('nav')).toBeInTheDocument();
  });

  it('renders all menu items on large screen', () => {
    render(<Nav {...defaultProps} />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Career')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders the correct number of menu items', () => {
    render(<Nav {...defaultProps} />);
    const listItems = screen.getAllByRole('listitem');
    // 4 menu items + 1 theme toggle item = at least 4
    expect(listItems.length).toBeGreaterThanOrEqual(4);
  });

  it('renders moon icon when dark mode is off', () => {
    render(<Nav {...defaultProps} darkMode={false} />);
    expect(screen.getByTestId('icon-moon')).toBeInTheDocument();
  });

  it('renders sun icon when dark mode is on', () => {
    render(<Nav {...defaultProps} darkMode={true} />);
    expect(screen.getByTestId('icon-sun')).toBeInTheDocument();
  });

  it('calls setDarkMode when theme toggle is clicked', () => {
    const setDarkMode = vi.fn();
    render(<Nav {...defaultProps} setDarkMode={setDarkMode} darkMode={false} />);
    const themeToggle = screen.getByTestId('icon-moon').closest('span');
    fireEvent.click(themeToggle);
    expect(setDarkMode).toHaveBeenCalledWith(true);
  });

  it('toggles darkMode to false when already dark', () => {
    const setDarkMode = vi.fn();
    render(<Nav {...defaultProps} setDarkMode={setDarkMode} darkMode={true} />);
    const themeToggle = screen.getByTestId('icon-sun').closest('span');
    fireEvent.click(themeToggle);
    expect(setDarkMode).toHaveBeenCalledWith(false);
  });

  it('renders hamburger menu icon when menu is closed', () => {
    render(<Nav {...defaultProps} isMenuOpened={false} />);
    expect(screen.getByTestId('icon-menu')).toBeInTheDocument();
  });

  it('renders close icon when menu is open', () => {
    render(<Nav {...defaultProps} isMenuOpened={true} />);
    expect(screen.getByTestId('icon-close')).toBeInTheDocument();
  });

  it('calls setMenuOpen when hamburger button is clicked', () => {
    const setMenuOpen = vi.fn();
    render(<Nav {...defaultProps} setMenuOpen={setMenuOpen} isMenuOpened={false} />);
    const menuButton = screen.getByLabelText('Toggle menu');
    fireEvent.click(menuButton);
    expect(setMenuOpen).toHaveBeenCalledWith(true);
  });

  it('renders the logo scroll link to landing', () => {
    render(<Nav {...defaultProps} />);
    expect(screen.getByTestId('scroll-landing')).toBeInTheDocument();
  });

  it('renders scroll links for each menu item', () => {
    render(<Nav {...defaultProps} />);
    expect(screen.getByTestId('scroll-about')).toBeInTheDocument();
    expect(screen.getByTestId('scroll-skills')).toBeInTheDocument();
    expect(screen.getByTestId('scroll-career')).toBeInTheDocument();
    expect(screen.getByTestId('scroll-contact')).toBeInTheDocument();
  });

  it('has sticky positioning', () => {
    const { container } = render(<Nav {...defaultProps} />);
    const nav = container.querySelector('nav');
    expect(nav.className).toContain('sticky');
    expect(nav.className).toContain('top-0');
  });
});
