import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Home from '../Home';
import { mockPodcasts } from '@/mocks/podcasts.mock';

vi.mock('@/hooks/useLocale', () => ({
  useLocale: () => ({
    components: {
      searchPodcasts: {
        placeHolder: 'Buscar podcast',
      },
      listPodcasts: {
        author: 'Autor',
      },
    },
  }),
}));

vi.mock('@/hooks/useFetchApi', () => ({
  useFetchApi: () => ({
    setFetchType: vi.fn(),
  }),
}));

vi.mock('@/context', () => ({
  useAppContext: () => ({
    podcasts: mockPodcasts,
    setStatusIcon: vi.fn(),
  }),
}));

describe('Page Home – Búsqueda del podcast THE JOE BUDDEN PODCAST', () => {
  it('filtra los podcasts al escribir en el buscador', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(
      screen.getByText('THE JOE BUDDEN PODCAST - THE JOE BUDDEN NETWORK')
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `TONY MANTOR'S : ALMOST LIVE..... NASHVILLE - TONY MANTOR`
      )
    ).toBeInTheDocument();

    expect(screen.getByText('2')).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/buscar podcast/i);
    await user.type(input, 'THE JOE');

    expect(
      screen.getByText('THE JOE BUDDEN PODCAST - THE JOE BUDDEN NETWORK')
    ).toBeInTheDocument();

    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
