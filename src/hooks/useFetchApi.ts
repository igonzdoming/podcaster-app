import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getListPodcasts, getPodcastDetail } from '../api/api.services';
import { useAppContext } from '../context';
import { formatResponses } from '../utils/formatApiResponses';
import type { FormatType } from '@/api/types/Podcasts';

export const useFetchApi = () => {
  const navigate = useNavigate();
  const {
    podcasts,
    setPodcasts,
    selectedEpisode,
    podcastSelected,
    setPodcastDetail,
  } = useAppContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [fetchType, setFetchType] = useState<FormatType>();

  const fetchPodcasts = useCallback(async () => {
    if (!fetchType) return;

    try {
      setLoading(true);

      if (fetchType === 'top_100' && podcasts.length === 0) {
        const data = await getListPodcasts();
        const response = data.feed.entry;
        setPodcasts(formatResponses(response, fetchType));
      }

      if (fetchType === 'podcast_detail' && podcastSelected) {
        const data = await getPodcastDetail(podcastSelected);
        const response = Array.isArray(data.results)
          ? data.results
          : [data.results];

        setPodcastDetail(formatResponses(response, fetchType));
      }
    } catch {
      setError(true);
      navigate('/');
      setTimeout(() => setError(false), 200);
    } finally {
      setLoading(false);
    }
  }, [
    fetchType,
    podcasts.length,
    podcastSelected,
    navigate,
    setPodcasts,
    setPodcastDetail,
  ]);

  useEffect(() => {
    fetchPodcasts();
  }, [fetchPodcasts, selectedEpisode]);

  return {
    loading,
    error,
    setFetchType,
  };
};
