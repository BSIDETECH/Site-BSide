import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';
import { describe, it, expect, vi } from 'vitest';

// Mock the child components to simplify testing the App component's core functionality (the menu state)
vi.mock('./components/DataConsultingSection', () => ({
  DataConsultingSection: () => <div data-testid="data-consulting-section" />
}));
vi.mock('./components/SaaSProductsSection', () => ({
  SaaSProductsSection: () => <div data-testid="saas-products-section" />
}));
vi.mock('./components/ContactSection', () => ({
  ContactSection: () => <div data-testid="contact-section" />
}));
vi.mock('./components/FloatingWhatsApp', () => ({
  FloatingWhatsApp: () => <div data-testid="floating-whatsapp" />
}));
vi.mock('./components/FeatureCard', () => ({
  FeatureCard: ({ title }: { title: string }) => <div data-testid={`feature-card-${title}`} />
}));

describe('App Component', () => {
  it('renders correctly', () => {
    render(<Home />);
    expect(screen.getAllByText('B-Side Tech')[0]).toBeInTheDocument();
  });

  it('mobile menu is initially closed', () => {
    render(<Home />);
    // On desktop, links are visible, but the mobile menu links have specific text/classes
    // Since we use the same text ("Serviços"), we can check if the mobile menu container is absent.
    // The mobile menu container is inside a condition: {isMobileMenuOpen && (...)}
    // Let's test that the mobile menu text that is only in the mobile menu is not present, or the number of 'Serviços' links is 1 (the desktop one).
    const servicesLinks = screen.getAllByText('Serviços');
    expect(servicesLinks).toHaveLength(1); // Only the desktop nav one should be present
  });

  it('toggles mobile menu when button is clicked', () => {
    render(<Home />);

    // The mobile menu button contains the Menu icon initially
    // Since there are multiple buttons (e.g., Solicitar Demonstração), let's find the menu button by aria-label if exists, or by getting the specific one.
    // Let's get the button that is inside the header and is for the mobile menu. It has the text 'Serviços' only once before click.
    // Actually, looking at the code, it doesn't have an aria-label. Let's find it by looking for the button containing the Menu lucide icon, but since it's an SVG, it's easier to find the button inside the header that doesn't have text.
    // Alternatively, we can find it by getting all buttons and picking the first one (which is the mobile menu button in the header).
    // The ThemeSwitcher has 2 buttons (desktop & mobile) with aria-label.
    // We filter them out to find the actual menu toggle button.
    const menuToggleBtn = screen.getAllByRole('button').filter(btn => btn.getAttribute('aria-label') !== 'Theme switcher')[0];

    // Initial state: 1 "Serviços" link (Desktop)
    expect(screen.getAllByText('Serviços')).toHaveLength(1);

    // Click to open
    fireEvent.click(menuToggleBtn);

    // After click: 2 "Serviços" links (Desktop + Mobile)
    expect(screen.getAllByText('Serviços')).toHaveLength(2);

    // Click to close
    fireEvent.click(menuToggleBtn);

    // After second click: back to 1 link
    expect(screen.getAllByText('Serviços')).toHaveLength(1);
  });

  it('closes mobile menu when a mobile menu link is clicked', () => {
    render(<Home />);

    const menuToggleBtn = screen.getAllByRole('button').filter(btn => btn.getAttribute('aria-label') !== 'Theme switcher')[0];
    fireEvent.click(menuToggleBtn);

    // Verify it's open
    expect(screen.getAllByText('Serviços')).toHaveLength(2);

    // Find the mobile link. It's inside a div, so let's get all and click the last one (which is the mobile one)
    const servicesLinks = screen.getAllByText('Serviços');
    const mobileLink = servicesLinks[1];

    fireEvent.click(mobileLink);

    // Verify it's closed
    expect(screen.getAllByText('Serviços')).toHaveLength(1);
  });
});
