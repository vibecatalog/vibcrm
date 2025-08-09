import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Navigation } from '@/components/layout/Navigation';

// Mock components to avoid complex dependencies
vi.mock('@/components/ui/Button', () => ({
  Button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
}));

vi.mock('@/components/icons/RocketIcon', () => ({
  RocketIcon: (props: any) => <div data-testid="rocket-icon" {...props} />,
}));

vi.mock('@/components/icons/MenuIcon', () => ({
  MenuIcon: (props: any) => <div data-testid="menu-icon" {...props} />,
}));

describe('Navigation', () => {
  it('renders the logo and brand name', () => {
    render(<Navigation />);

    expect(screen.getByTestId('rocket-icon')).toBeInTheDocument();
    expect(screen.getByText('VibCRM')).toBeInTheDocument();
  });

  it('renders desktop navigation menu', () => {
    render(<Navigation />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders action buttons', () => {
    render(<Navigation />);

    expect(screen.getAllByText('Login')).toHaveLength(1);
    expect(screen.getAllByText('Get Started Free')).toHaveLength(1);
  });

  it('shows mobile menu button on mobile', () => {
    render(<Navigation />);

    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    expect(menuButton).toBeInTheDocument();
    expect(screen.getByTestId('menu-icon')).toBeInTheDocument();
  });

  it('opens mobile menu when menu button is clicked', async () => {
    render(<Navigation />);

    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    fireEvent.click(menuButton);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    // Should have mobile versions of action buttons
    expect(screen.getAllByText('Login')).toHaveLength(2); // Desktop + mobile
    expect(screen.getAllByText('Get Started Free')).toHaveLength(2); // Desktop + mobile
  });

  it('closes mobile menu when clicking outside', async () => {
    render(<Navigation />);

    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    fireEvent.click(menuButton);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    // Click outside
    fireEvent.mouseDown(document.body);

    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  it('handles keyboard navigation in mobile menu', async () => {
    render(<Navigation />);

    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    fireEvent.click(menuButton);

    await waitFor(() => {
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    // Test Escape key
    fireEvent.keyDown(document, { key: 'Escape' });

    await waitFor(() => {
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
  });

  it('has proper ARIA attributes', () => {
    render(<Navigation />);

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Main navigation');

    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu');
  });

  it('supports smooth scrolling to sections', async () => {
    const mockScrollIntoView = vi.fn();

    // Mock querySelector to return an element with scrollIntoView
    const mockElement = { scrollIntoView: mockScrollIntoView };
    vi.spyOn(document, 'querySelector').mockReturnValue(mockElement as any);

    render(<Navigation />);

    const featuresLink = screen.getByText('Features');
    fireEvent.click(featuresLink);

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });
});
