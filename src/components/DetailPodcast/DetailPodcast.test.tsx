import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import DetailPodcast from './DetailPodcast';
import { mockPodcasts } from '@/mocks/podcasts.mock';

const mockPodcast = mockPodcasts[0];

const renderComponent = () =>
  render(
    <MemoryRouter>
      <DetailPodcast podcast={mockPodcast} />
    </MemoryRouter>
  );

describe('DetailPodcast', () => {
  it('renderiza la imagen del podcast', () => {
    renderComponent();

    const image = screen.getByRole('img', {
      name: mockPodcast.title,
    });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockPodcast.img);
  });

  it('renderiza el artista del podcast', () => {
    renderComponent();

    expect(screen.getByText(mockPodcast.artist)).toBeInTheDocument();

    expect(screen.getByText(`by ${mockPodcast.artist}`)).toBeInTheDocument();
  });

  it('renderiza la descripción del podcast', () => {
    renderComponent();

    expect(screen.getByText('Description:')).toBeInTheDocument();

    expect(screen.getByText(mockPodcast.description)).toBeInTheDocument();
  });

  it('crea el link correctamente hacia el podcast', () => {
    renderComponent();

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', `/podcast/${mockPodcast.id}`);
  });
});
