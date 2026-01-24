import { useEffect, useState } from 'react';
import { useFetchApi } from '../hooks/useFetchApi';
import ListPodcasts from '../components/ListPodcasts/ListPodcasts';
import SearchPodcast from '../components/SearchPodcasts/SearchPodcasts';
import { useMemo } from 'react';
import { useAppContext } from '@/context';

const Home = () => {
  const { error, setFetchType } = useFetchApi();
  const { setStatusIcon, podcasts } = useAppContext();
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if (podcasts.length === 0) {
      setFetchType('top_100');
    }
  }, [podcasts.length]);

  const filteredPodcasts = useMemo(() => {
    return podcasts.filter((podcast) =>
      Object.values(podcast).some(
        (value) =>
          value !== undefined &&
          value !== null &&
          value.toString().toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [podcasts, search]);
  useEffect(() => {
    if (podcasts.length !== 0 && filteredPodcasts && !error && search === '') {
      setStatusIcon({
        type: 'info',
        duration: 2000,
      });
    }
  }, [filteredPodcasts]);

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
