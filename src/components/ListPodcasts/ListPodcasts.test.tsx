import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import ListPodcasts from './ListPodcasts';
import { mockPodcasts } from '@/mocks/podcasts.mock';

const renderComponent = () =>
  render(
    <MemoryRouter>
      <ListPodcasts podcasts={mockPodcasts} />
    </MemoryRouter>
  );

describe('ListPodcasts', () => {
  it('renderizar listado de podcasts', () => {
    renderComponent();

    expect(
      screen.getByText('THE JOE BUDDEN PODCAST - THE JOE BUDDEN NETWORK')
    ).toBeInTheDocument();
  });

  it('mostrar el autor del podcast THE JOE BUDDEN PODCAST', () => {
    renderComponent();

    expect(
      screen.getByText('Author: The Joe Budden Network')
    ).toBeInTheDocument();
  });

  it('renderiza las imágenes de los podcasts', () => {
    renderComponent();

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);

    expect(images[0]).toHaveAttribute(
      'src',
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png'
    );
  });

  it('crea los links correctamente hacia el detalle del podcast', () => {
    renderComponent();

    const links = screen.getAllByRole('link');

    expect(links[0]).toHaveAttribute('href', '/podcast/1535809341');
  });
});
