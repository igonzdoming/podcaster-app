import { useEffect, useState } from 'react';
import { getListPodcasts, getPodcastDetail } from '../api/api.services';
import { useAppContext } from '../context';
import { formatResponses } from '../utils/formatApiResponses';

export const useFetchApi = (type: string) => {
  const {
    setMessage,
    podcasts,
    setPodcasts,
    selectedEpisode,
    podcastSelected,
    setSelectedPodcast,
    setPodcastDetail,
  } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchPodcasts = async () => {
    try {
      setLoading(true);
      if (type === 'top_100' && podcasts.length === 0) {
        const data = await getListPodcasts();
        const response = data.feed.entry;
        setPodcasts(formatResponses(response, type));
      }

      if (type === 'podcast_detail' && podcastSelected) {
        const data = await getPodcastDetail(podcastSelected);

        const response = Array.isArray(data.results)
          ? data.results
          : [data.results];

        setPodcastDetail(formatResponses(response, type));
      }
    } catch {
      setError(true);
      setMessage({
        message: 'Ha ocurrido un problema',
        type: 'error',
        duration: 2000,
      });
      setTimeout(() => {
        setError(false);
      }, 200);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPodcasts();
  }, [type, selectedEpisode, podcastSelected]);

  return { podcasts, loading, podcastSelected, setSelectedPodcast, error };
};
