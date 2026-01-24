import { useParams } from 'react-router-dom';
import { useFetchApi } from '../../hooks/useFetchApi';
import DetailPodcast from '../../components/DetailPodcast/DetailPodcast';
import './Detail.css';
import { useEffect } from 'react';
import { useAppContext } from '../../context';
import DetailEpisodes from '../../components/DetailEpisodes/DetailEpisodes';

export default function UserDetail() {
  const { setSelectedPodcast } = useFetchApi('podcast_detail');
  const { podcasts, podcastSelected, podcastDetail } = useAppContext();
  const { id, episodeId } = useParams<{ id: string; episodeId: string }>();
  useEffect(() => {
    if (id) {
      setSelectedPodcast(id);
    }
  }, [id]);
  const filteredPodcast = podcasts.find((pod) => pod.id === podcastSelected);
  return (
    <>
      {podcastSelected && filteredPodcast && (
        <div className="container-detail">
          <DetailPodcast podcast={filteredPodcast} />
          <DetailEpisodes
            podcastDetail={podcastDetail}
            episodeId={episodeId}
            podcastCount={podcastDetail.length}
            podCastId={id}
          />
        </div>
      )}
    </>
  );
}
