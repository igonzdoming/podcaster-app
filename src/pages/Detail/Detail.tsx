import { memo, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchApi } from '../../hooks/useFetchApi';
import { useAppContext } from '../../context';
import DetailPodcast from '../../components/DetailPodcast/DetailPodcast';
import DetailEpisodes from '../../components/DetailEpisodes/DetailEpisodes';
import './Detail.css';

const Detail = () => {
  const { podcastId, episodeId } = useParams<{
    podcastId: string;
    episodeId: string;
  }>();
  const { setFetchType } = useFetchApi();

  const {
    podcasts,
    podcastSelected,
    podcastDetail,
    setSelectedPodcast,
    setStatusIcon,
  } = useAppContext();

  const selectedPodcast = useMemo(() => {
    if (!podcastId || podcasts.length === 0) return null;
    return podcasts.find((pod) => pod.id === podcastId) ?? null;
  }, [podcasts, podcastId]);

  useEffect(() => {
    if (!podcastId) return;

    setSelectedPodcast(podcastId);
    setFetchType(podcasts.length === 0 ? 'top_100' : 'podcast_detail');
  }, [podcastId, podcasts.length, setFetchType, setSelectedPodcast]);

  useEffect(() => {
    if (!podcastSelected || !selectedPodcast) return;

    setStatusIcon({
      type: 'info',
      duration: 2000,
    });
  }, [podcastSelected, selectedPodcast, setStatusIcon]);

  if (!selectedPodcast || !podcastSelected) {
    return null;
  }

  return (
    <div className="container-detail">
      <DetailPodcast podcast={selectedPodcast} />

      <DetailEpisodes
        podcastDetail={podcastDetail}
        episodeId={episodeId}
        podcastCount={podcastDetail.length}
        podcastId={podcastId}
      />
    </div>
  );
};

export default memo(Detail);
