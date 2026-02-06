import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';

// Use a variable to control mock state per test
let mockFormState = { succeeded: false, submitting: false, errors: [] };
const mockHandleSubmit = vi.fn((e) => {
  e.preventDefault();
});

vi.mock('@formspree/react', () => ({
  useForm: () => [mockFormState, mockHandleSubmit],
  ValidationError: ({ prefix, field, errors }) =>
    React.createElement('span', { 'data-testid': `error-${field}` }),
}));

// Must import after vi.mock
import Contact from '../../components/contact';

const mockTranslation = {
  name: 'Name',
  email: 'Email',
  message: 'Message',
  send: 'Send',
  thanksForContacting: 'Thanks for taking the time to reach out.',
};

describe('Contact', () => {
  beforeEach(() => {
    mockFormState = { succeeded: false, submitting: false, errors: [] };
    vi.clearAllMocks();
  });

  it('renders the contact form', () => {
    const { container } = render(<Contact translation={mockTranslation} />);
    expect(container.querySelector('form')).toBeInTheDocument();
  });

  it('renders the heading', () => {
    render(<Contact translation={mockTranslation} />);
    // The source uses a curly apostrophe (Let\u2019s talk)
    expect(screen.getByText(/Let.*s talk/)).toBeInTheDocument();
  });

  it('renders the heading as an h2', () => {
    render(<Contact translation={mockTranslation} />);
    const heading = screen.getByText(/Let.*s talk/);
    expect(heading.tagName).toBe('H2');
  });

  it('renders the name field with translated label', () => {
    render(<Contact translation={mockTranslation} />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  it('renders the email field with translated label', () => {
    render(<Contact translation={mockTranslation} />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders the message field with translated label', () => {
    render(<Contact translation={mockTranslation} />);
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('renders the name input with correct type', () => {
    render(<Contact translation={mockTranslation} />);
    const nameInput = screen.getByLabelText('Name');
    expect(nameInput.type).toBe('text');
  });

  it('renders the email input with correct type', () => {
    render(<Contact translation={mockTranslation} />);
    const emailInput = screen.getByLabelText('Email');
    expect(emailInput.type).toBe('email');
  });

  it('renders the message as a textarea', () => {
    render(<Contact translation={mockTranslation} />);
    const messageInput = screen.getByLabelText('Message');
    expect(messageInput.tagName).toBe('TEXTAREA');
  });

  it('renders the submit button', () => {
    render(<Contact translation={mockTranslation} />);
    const button = screen.getByRole('button', { name: 'Send message' });
    expect(button).toBeInTheDocument();
    expect(button.type).toBe('submit');
  });

  it('renders the Calendly widget after loading it', async () => {
    render(<Contact translation={mockTranslation} />);
    const loadButton = screen.getByRole('button', { name: 'Load scheduler' });
    fireEvent.click(loadButton);
    expect(await screen.findByTestId('calendly-widget')).toBeInTheDocument();
  });

  it('renders the Calendly widget with correct URL after loading', async () => {
    render(<Contact translation={mockTranslation} />);
    const loadButton = screen.getByRole('button', { name: 'Load scheduler' });
    fireEvent.click(loadButton);
    const widget = await screen.findByTestId('calendly-widget');
    expect(widget.dataset.url).toBe('https://calendly.com/diegoarndt');
  });

  it('renders "Schedule a call" heading', () => {
    render(<Contact translation={mockTranslation} />);
    expect(screen.getByText('Schedule a call')).toBeInTheDocument();
  });

  it('renders the direct email link', () => {
    render(<Contact translation={mockTranslation} />);
    const emailLink = screen.getByText('Email me directly');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink.href).toBe('mailto:diegoarndt@outlook.com');
  });

  it('renders the "or" separator', () => {
    render(<Contact translation={mockTranslation} />);
    expect(screen.getByText('or')).toBeInTheDocument();
  });

  it('renders input placeholders', () => {
    render(<Contact translation={mockTranslation} />);
    expect(screen.getByPlaceholderText('Full name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('How can I help?')).toBeInTheDocument();
  });

  it('calls form submit handler on form submission', async () => {
    render(<Contact translation={mockTranslation} />);
    fireEvent.change(screen.getByPlaceholderText('Full name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Email address'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('How can I help?'), { target: { value: 'Hello!' } });
    const submitButton = screen.getByRole('button', { name: 'Send message' });
    fireEvent.click(submitButton);
    await waitFor(() => expect(mockHandleSubmit).toHaveBeenCalled());
  });

  it('renders validation error containers for each field', () => {
    render(<Contact translation={mockTranslation} />);
    expect(screen.getByTestId('error-name')).toBeInTheDocument();
    expect(screen.getByTestId('error-email')).toBeInTheDocument();
    expect(screen.getByTestId('error-message')).toBeInTheDocument();
  });

  it('uses different translation labels', () => {
    render(
      <Contact
        translation={{
          ...mockTranslation,
          name: 'Nombre',
          email: 'Correo',
          message: 'Mensaje',
        }}
      />
    );
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
    expect(screen.getByLabelText('Correo')).toBeInTheDocument();
    expect(screen.getByLabelText('Mensaje')).toBeInTheDocument();
  });
});

describe('Contact - Success State', () => {
  beforeEach(() => {
    mockFormState = { succeeded: true, submitting: false, errors: [] };
  });

  it('renders success message when form submission succeeds', () => {
    render(<Contact translation={mockTranslation} />);
    expect(screen.getByText('Thanks for taking the time to reach out.')).toBeInTheDocument();
  });

  it('does not render the form when submission succeeded', () => {
    const { container } = render(<Contact translation={mockTranslation} />);
    expect(container.querySelector('form')).not.toBeInTheDocument();
  });
});

describe('Contact - Submitting State', () => {
  beforeEach(() => {
    mockFormState = { succeeded: false, submitting: true, errors: [] };
  });

  it('disables submit button while submitting', () => {
    render(<Contact translation={mockTranslation} />);
    const button = screen.getByRole('button', { name: 'Send message' });
    expect(button).toBeDisabled();
  });
});
