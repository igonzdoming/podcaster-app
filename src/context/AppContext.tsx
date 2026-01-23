import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Entry, Podcast } from '@/api/types/Podcasts';
import type { Episodes } from '@/api/types/Episodes';

type AppContextType = {
  podcasts: Entry[];
  episodes: Podcast[] | null;
  selectedEpisode: string;
  setPodcasts: (podcasts: Entry[]) => void;
  setEpisodes: (episodes: Podcast[]) => void;
  setSelectedEpisode: (selectedEpisode: string) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [podcasts, setPodcasts] = useState<Entry[]>([]);
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
