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

export interface SearchPodcastProps {
  onSearch: (value: string) => void;
  totalResults: number;
}
