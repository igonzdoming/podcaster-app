import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Detail from './Detail';
import { mockEpisodes } from '@/mocks/episodes.mocks';
import { mockPodcasts } from '@/mocks/podcasts.mock';

vi.mock('@/hooks/useLocale', () => ({
  useLocale: () => ({
    components: {
      detailEpisodes: {
        episodes: 'Episodios',
        table: {
          columns: ['Título', 'Fecha', 'Fecha', 'Duración'],
        },
      },
      detailPodcast: {
        by: 'By',
        description: 'Description',
      },
    },
  }),
}));

vi.mock('../../hooks/useFetchApi', () => ({
  useFetchApi: () => ({
    setFetchType: vi.fn(),
  }),
}));

vi.mock('@/context', () => ({
  useAppContext: () => ({
    podcasts: mockPodcasts,
    podcastSelected: true,
    podcastDetail: mockEpisodes,
    setSelectedPodcast: vi.fn(),
    setStatusIcon: vi.fn(),
  }),
}));

const renderWithRouter = (initialRoute: string) => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Routes>
        <Route path="/podcast/:id" element={<Detail />} />
        <Route path="/podcast/:id/episode/:episodeId" element={<Detail />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('Page Detail – Navegación entre episodio y listado', () => {
  it('vuelve al listado de episodios al hacer click en "Volver a la lista"', async () => {
    const user = userEvent.setup();

    renderWithRouter('/podcast/1535809341/episode/1000745532416');

    expect(
      screen.getByRole('heading', {
        name: mockEpisodes[0].trackName,
      })
    ).toBeInTheDocument();

    const backLink = screen.getByRole('link', {
      name: /volver a la lista de episodios/i,
    });

    await user.click(backLink);
    expect(
      screen.getByRole('table', {
        name: /lista de episodios del podcast/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/episodios:/i)).toBeInTheDocument();
  });
});
