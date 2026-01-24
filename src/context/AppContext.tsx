import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type {
  FormattedPodcastDetail,
  Podcast,
  PodcastsMapingData,
} from '@/api/types/Podcasts';
import type { Episodes } from '@/api/types/Episodes';

type AppContextType = {
  podcasts: PodcastsMapingData[];
  episodesById: Podcast[] | null;
  selectedEpisode: string;
  podcastSelected: string;
  podcastDetail: FormattedPodcastDetail[];
  setPodcasts: (podcasts: PodcastsMapingData[]) => void;
  setEpisodesById: (episodes: Podcast[]) => void;
  setSelectedEpisode: (selectedEpisode: string) => void;
  setSelectedPodcast: (podcastSelected: string) => void;
  setPodcastDetail: (podcastDetail: FormattedPodcastDetail[]) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  // Podcasts
  const [podcasts, setPodcasts] = useState<PodcastsMapingData[]>([]);
  const [podcastSelected, setSelectedPodcast] = useState<string>('');
  const [podcastDetail, setPodcastDetail] = useState<FormattedPodcastDetail[]>(
    []
  );
  // Episodes
  const [episodesById, setEpisodesById] = useState<Episodes[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<string>('');

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

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used inside AppProvider');
  }
  return context;
}
