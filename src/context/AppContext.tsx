import { createContext, useContext } from 'react';
import type {
  FormattedPodcastDetail,
  Podcast,
  PodcastsMapingData,
} from '../api/types/Podcasts';
import type { ToastProps } from '@/components/Toast/Types/Toast';

export type AppContextType = {
  podcasts: PodcastsMapingData[];
  episodesById: Podcast[] | null;
  selectedEpisode: string;
  podcastSelected: string;
  podcastDetail: FormattedPodcastDetail[];
  message: ToastProps | null;
  setMessage: (message: ToastProps | null) => void;
  setPodcasts: (podcasts: PodcastsMapingData[]) => void;
  setEpisodesById: (episodes: Podcast[]) => void;
  setSelectedEpisode: (selectedEpisode: string) => void;
  setSelectedPodcast: (podcastSelected: string) => void;
  setPodcastDetail: (podcastDetail: FormattedPodcastDetail[]) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error();
  }
  return context;
}
