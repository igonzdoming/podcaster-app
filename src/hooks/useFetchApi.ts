import { useEffect, useState } from 'react';
import { getListPodcasts, getPodcastDetail } from '@/api/api.services';
import { useAppContext } from '@/context';
import { formatResponses } from '@/utils/formatApiResponses';

export const useFetchApi = (type: string) => {
  const {
    podcasts,
    setPodcasts,
    selectedEpisode,
    podcastSelected,
    setSelectedPodcast,
    setPodcastDetail,
  } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPodcasts = async () => {
    try {
      setLoading(true);
      if (type === 'top_100' && podcasts.length === 0) {
        const data = await getListPodcasts();
        const response = data.feed.entry;
        const formatted = formatResponses(response, type);
        setPodcasts(formatted);
      }

      if (type === 'podcast_detail' && podcastSelected) {
        const data = await getPodcastDetail(podcastSelected);
        const response = data.results;
        const formatted = formatResponses([response], type);
        setPodcastDetail(formatted);
      }
    } catch (err) {
      console.error(err);
      setError('Error fetching podcasts');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPodcasts();
  }, [type, selectedEpisode, podcastSelected]);

  return { podcasts, loading, error, podcastSelected, setSelectedPodcast };
};
