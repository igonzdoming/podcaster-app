import { useEffect, useState } from 'react';
import { getListPodcasts, getEpisodesDetail } from '@/api/api.services';
import { useAppContext } from '@/context';
import { formatResponses } from '@/utils/formatApiResponses';

export const useFetchApi = (type: string) => {
  const { podcasts, setPodcasts, setEpisodes, selectedEpisode } =
    useAppContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        setLoading(true);

        if (type === 'top_100' && podcasts.length === 0) {
          const data = await getListPodcasts();
          const response = data.feed.entry;
          const formatted = formatResponses(response, type);
          setPodcasts(formatted);
        }

        if (type === 'episodes') {
          const data = await getEpisodesDetail(selectedEpisode);
          setEpisodes(data ?? []);
        }
      } catch (err) {
        console.error(err);
        setError('Error fetching podcasts');
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, [type, selectedEpisode]);

  return { podcasts, loading, error };
};
