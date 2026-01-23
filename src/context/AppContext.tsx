import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Podcast, PodcastsMapingData } from '@/api/types/Podcasts';
import type { Episodes } from '@/api/types/Episodes';

type AppContextType = {
  podcasts: PodcastsMapingData[];
  episodes: Podcast[] | null;
  selectedEpisode: string;
  setPodcasts: (podcasts: PodcastsMapingData[]) => void;
  setEpisodes: (episodes: Podcast[]) => void;
  setSelectedEpisode: (selectedEpisode: string) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [podcasts, setPodcasts] = useState<PodcastsMapingData[]>([]);
  const [episodes, setEpisodes] = useState<Episodes[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<string>('');

  return (
    <AppContext.Provider
      value={{
        podcasts,
        setPodcasts,
        episodes,
        setEpisodes,
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
