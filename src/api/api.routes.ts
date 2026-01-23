export const API_PATHS = {
  podcasts: {
    list: '/us/rss/toppodcasts/limit=100/genre=1310/json',
    detail: (id: string) =>
      `lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`,
  },
} as const;
