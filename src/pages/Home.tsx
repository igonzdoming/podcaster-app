import { useFetchApi } from '@/hooks/useFetchApi';
import ListPodcasts from '@/components/ListPodcasts/ListPodcasts';

const Home = () => {
  const { podcasts } = useFetchApi('top_100');
  return (
    <div>
      <ListPodcasts podcasts={podcasts} />
    </div>
  );
};
export default Home;
