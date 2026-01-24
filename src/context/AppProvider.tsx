import { useState } from 'react';
import type { ReactNode } from 'react';
import { AppContext } from './AppContext';
import type {
  FormattedPodcastDetail,
  PodcastsMapingData,
} from '../api/types/Podcasts';
import type { Episodes } from '@/api/types/Episodes';

export function AppProvider({ children }: { children: ReactNode }) {
  // Podcasts
  const [podcasts, setPodcasts] = useState<PodcastsMapingData[]>([]);
  const [podcastSelected, setSelectedPodcast] = useState('');
  const [podcastDetail, setPodcastDetail] = useState<FormattedPodcastDetail[]>(
    []
  );
  // Episodes
  const [episodesById, setEpisodesById] = useState<Episodes[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState('');

  return (
    <AppContext.Provider
      value={{
        podcasts,
        setPodcasts,
        podcastSelected,
        setSelectedPodcast,
        podcastDetail,
        setPodcastDetail,
        episodesById,
        setEpisodesById,
        selectedEpisode,
        setSelectedEpisode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
