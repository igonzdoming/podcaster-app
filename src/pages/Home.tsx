import { useEffect, useMemo, useState } from 'react';
import { useFetchApi } from '../hooks/useFetchApi';
import ListPodcasts from '../components/ListPodcasts/ListPodcasts';
import SearchPodcast from '../components/SearchPodcasts/SearchPodcasts';
import { useAppContext } from '@/context';

const Home = () => {
  const { error, setFetchType } = useFetchApi();
  const { podcasts, setStatusIcon } = useAppContext();
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (podcasts.length === 0) {
      setFetchType('top_100');
    }
  }, [podcasts.length, setFetchType]);

  const filteredPodcasts = useMemo(() => {
    if (!search) {
      return podcasts;
    }

    const query = search.toLowerCase();

    return podcasts.filter((podcast) =>
      `${podcast.title} ${podcast.artist}`.toLowerCase().includes(query)
    );
  }, [podcasts, search]);

  useEffect(() => {
    if (podcasts.length > 0 && !error && !search) {
      setStatusIcon({
        type: 'info',
        duration: 2000,
      });
    }
  }, [podcasts.length, error, search, setStatusIcon]);

  return (
    <div>
      <SearchPodcast
        onSearch={setSearch}
        totalResults={filteredPodcasts.length}
      />

      <ListPodcasts podcasts={filteredPodcasts} />
    </div>
  );
};

export default Home;
