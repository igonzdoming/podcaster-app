export interface Podcast {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ApiResponsePodcasts {
  feed: Feed;
}

export interface Feed {
  author: Author;
  entry: Entry[];
  updated: UpdatedClass;
  id: UpdatedClass;
}

export interface Author {
  name: UpdatedClass;
  uri: UpdatedClass;
}

export interface UpdatedClass {
  label: string;
}

export interface Entry {
  'im:name': UpdatedClass;
  'im:image': IMImage[];
  summary: UpdatedClass;
  title: UpdatedClass;
  id: PurpleID;
  'im:artist': IMArtist;
  'im:releaseDate': IMReleaseDate;
}

export interface PurpleID {
  label: string;
  attributes: IDAttributes;
}

export interface IDAttributes {
  'im:id': string;
}

export interface IMArtist {
  label: string;
  attributes: IMArtistAttributes;
}

export interface IMArtistAttributes {
  href: string;
}

export interface IMImage {
  label: string;
  attributes: IMImageAttributes;
}

export interface IMImageAttributes {
  height: string;
}

export interface IMReleaseDate {
  label: string;
  attributes: UpdatedClass;
}

export interface PodcastProps {
  podcasts: PodcastsMapingData[];
}

export interface PodcastDetailProps {
  podcast: PodcastsMapingData;
}

export interface PodcastsMapingData {
  id: string;
  name: string;
  title: string;
  description: string;
  img: string;
  artist: string;
}

export type FormattedPodcast = {
  id: string;
  name: string;
  title: string;
  description: string;
  img: string;
  artist: string;
};

export interface FormattedPodcastDetail {
  trackId: number;
  trackName: string;
  artworkUrl60?: string;
  collectionName: string;
  description?: string;
  releaseDate: Date;
  duration: number;
  previewUrl?: string;
}

export interface SearchPodcastProps {
  onSearch: (value: string) => void;
  totalResults: number;
}

export interface DetailPodcastProps {
  podcast: PodcastProps;
}

export interface PodcastApiResponse {
  resultCount: number;
  results: Result[];
}

export interface ApiResponseDetailPodcastById {
  resultCount: number;
  results: Result;
}

export interface Result {
  collectionId: number;
  trackId: number;
  artistName?: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  collectionHdPrice?: number;
  releaseDate: Date;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackTimeMillis: number;
  artworkUrl600: string;
  genreIds?: string[];
  episodeUrl?: string;
  artworkUrl160?: string;
  shortDescription?: string;
  description?: string;
  previewUrl: string;
  episodeGuid?: string;
}

export interface PodcastMapingData {
  id: string;
  name: string;
  title: string;
  description: string;
  img: string;
  artist: string;
}

export type FormatType = 'top_100' | 'podcast_detail';
