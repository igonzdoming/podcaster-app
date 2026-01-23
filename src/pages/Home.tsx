import { useFetchApi } from '@/hooks/useFetchApi';

const Home = () => {
  const { podcasts } = useFetchApi('top_100');
  return (
    <div>
      <h1>Podcasts</h1>
      <ul>
        {podcasts.map((podcast, i) => (
          <li key={i}>{podcast['im:name']?.label}</li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
