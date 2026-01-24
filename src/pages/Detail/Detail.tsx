import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchApi } from '../../hooks/useFetchApi';
import { useAppContext } from '../../context';
import DetailPodcast from '../../components/DetailPodcast/DetailPodcast';
import DetailEpisodes from '../../components/DetailEpisodes/DetailEpisodes';
import './Detail.css';

const Detail = () => {
  const { id, episodeId } = useParams<{ id: string; episodeId: string }>();

  const { setFetchType } = useFetchApi();

  const {
    podcasts,
    podcastSelected,
    podcastDetail,
    setMessage,
    setSelectedPodcast,
  } = useAppContext();

  const selectedPodcast = useMemo(
    () => podcasts.find((pod) => pod.id === id),
    [podcasts, id]
  );

  useEffect(() => {
    if (!id) return;

    setSelectedPodcast(id);

    if (podcasts.length === 0) {
      setFetchType('top_100');
    } else {
      setFetchType('podcast_detail');
    }
  }, [id, podcasts.length]);

  useEffect(() => {
    if (!podcastSelected || !selectedPodcast) return;

    setMessage({
      message: 'Detalle de podcast cargado',
      type: 'success',
      duration: 2000,
    });
  }, [podcastSelected, selectedPodcast]);

  if (!podcastSelected || !selectedPodcast) {
    return null;
  }

  return (
    <div className="container-detail">
      <DetailPodcast podcast={selectedPodcast} />
      <DetailEpisodes
        podcastDetail={podcastDetail}
        episodeId={episodeId}
        podcastCount={podcastDetail.length}
        podCastId={id}
      />
    </div>
  );
};
export default Detail;
