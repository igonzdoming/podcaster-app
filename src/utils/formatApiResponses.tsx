import type {
  Entry,
  FormattedPodcast,
  FormattedPodcastDetail,
  FormatType,
  Result,
} from '@/api/types/Podcasts';

export function formatResponses(
  entries: Entry[],
  type: 'top_100'
): FormattedPodcast[];

export function formatResponses(
  entries: Result[],
  type: 'podcast_detail'
): FormattedPodcastDetail[];

export function formatResponses(
  entries: Entry[] | Result[],
  type: FormatType
): (FormattedPodcast | FormattedPodcastDetail)[] {
  switch (type) {
    case 'top_100':
      return (entries as Entry[]).map((dat) => ({
        id: dat.id.attributes['im:id'],
        name: dat['im:name'].label,
        title: dat.title.label,
        description: dat.summary.label,
        img: dat['im:image'][2]?.label ?? '',
        artist: dat['im:artist'].label,
      }));

    case 'podcast_detail':
      return (entries as Result[]).map((dat) => ({
        trackId: dat.trackId,
        trackName: dat.trackName,
        artworkUrl60: dat.artworkUrl60,
        collectionName: dat.collectionName,
        releaseDate: dat.releaseDate,
        duration: dat.trackTimeMillis,
        previewUrl: dat.trackViewUrl,
        description: dat.description,
      }));

    default:
      return [];
  }
}
