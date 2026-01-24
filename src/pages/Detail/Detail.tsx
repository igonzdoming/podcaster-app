import { useParams } from 'react-router-dom';
import { useFetchApi } from '@/hooks/useFetchApi';
import DetailPodcast from '@/components/DetailPodcast/DetailPodcast';
import './Detail.css';
import { useEffect } from 'react';
import { useAppContext } from '@/context';

export default function UserDetail() {
  const { setSelectedPodcast } = useFetchApi('podcast_detail');
  const { podcasts, podcastSelected } = useAppContext();
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    if (id) {
      setSelectedPodcast(id);
    }
  }, [id]);
  const filteredPodcast = podcasts.find((pod) => pod.id === podcastSelected);

  return (
    <>
      {podcastSelected && filteredPodcast && (
        <div className="container-podcast-detail">
          <DetailPodcast podcast={filteredPodcast} />
        </div>
      )}
    </>
  );
}
