import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DataConsultingSection } from './DataConsultingSection';

describe('DataConsultingSection Component', () => {
  it('renders the main section header correctly', () => {
    render(<DataConsultingSection />);

    // Check main heading
    expect(
      screen.getByRole('heading', { name: /Engenharia de Dados & IA para o Mercado Financeiro/i, level: 2 })
    ).toBeInTheDocument();

    // Check subtitle badge
    expect(screen.getByText('Consultoria Premium (B2B Corporativo)')).toBeInTheDocument();
  });

  it('renders all feature cards with correct titles', () => {
    render(<DataConsultingSection />);

    // Check card titles (h3)
    expect(screen.getByRole('heading', { name: 'Arquitetura de Dados Moderna', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Business Intelligence Avançado', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Automação com IA', level: 3 })).toBeInTheDocument();
  });

  it('renders the images with correct alt text', () => {
    render(<DataConsultingSection />);

    // Check images
    const dataPipelineImage = screen.getByRole('img', { name: 'Arquitetura de Dados' });
    expect(dataPipelineImage).toBeInTheDocument();
    expect(dataPipelineImage).toHaveAttribute('src', '/images/data-pipeline.png');

    const powerBiImage = screen.getByRole('img', { name: 'Dashboard Power BI' });
    expect(powerBiImage).toBeInTheDocument();
    expect(powerBiImage).toHaveAttribute('src', '/images/powerbi-dashboard.png');
  });
});
