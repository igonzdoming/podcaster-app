export const API_PATHS = {
  podcasts: {
    list: '/us/rss/toppodcasts/limit=100/genre=1310/json',
    detail: (podcastId: string) =>
      `lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
  },
} as const;
