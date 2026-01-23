import type { Entry } from '@/api/types/Podcasts';
import type { FormattedPodcast } from '@/api/types/Podcasts';

export function formatResponses(
  entries: Entry[],
  type: 'top_100' | 'episodes'
): FormattedPodcast[] {
  switch (type) {
    case 'top_100':
      return entries.map((dat) => ({
        id: dat.id.attributes['im:id'],
        name: dat['im:name'].label,
        title: dat.title.label,
        description: dat.summary.label,
        img: dat['im:image'][2]?.label ?? '',
        artist: dat['im:artist'].label,
      }));

    default:
      return [];
  }
}
