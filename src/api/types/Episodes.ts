import type { FormattedPodcastDetail } from './Podcasts';

export interface Episodes {
  id: string;
  title: string;
  description: string;
  image: string;
}

export type ListEpisodesProps = {
  podcastDetail: FormattedPodcastDetail[];
  podcastCount: number;
  podCastId: string;
};
