import { useState } from 'react';
import { useFetchApi } from '@/hooks/useFetchApi';
import ListPodcasts from '@/components/ListPodcasts/ListPodcasts';
import SearchPodcast from '@/components/SearchPodcasts/SearchPodcasts';
import { useMemo } from 'react';

const Home = () => {
  const { podcasts } = useFetchApi('top_100');
  const [search, setSearch] = useState('');
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
