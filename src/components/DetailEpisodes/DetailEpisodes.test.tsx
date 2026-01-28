import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import DetailEpisodes from './DetailEpisodes';
import { mockEpisodes } from '@/mocks/episodes.mocks';

vi.mock('react-router-dom', async () => {
  const actual =
    await vi.importActual<typeof import('react-router-dom')>(
      'react-router-dom'
    );

  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

vi.mock('@/context', () => ({
  useAppContext: () => ({
    setStatusIcon: vi.fn(),
  }),
}));

const renderComponent = () =>
  render(
    <MemoryRouter>
      <DetailEpisodes
        podcastDetail={mockEpisodes}
        podcastCount={2}
        podcastId="1535809341"
        episodeId={undefined}
      />
    </MemoryRouter>
  );

describe('DetailEpisodes (listado)', () => {
  it('renderizar la tabla con un episodio', () => {
    renderComponent();

    expect(
      screen.getByText('Episode 895 | "A Spirited Conversation"')
    ).toBeInTheDocument();

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute(
      'href',
      '/podcast/1535809341/episode/1000745532416'
    );

    expect(
      screen.getByRole('table', {
        name: /lista de episodios/i,
      })
    ).toBeInTheDocument();
  });
});
