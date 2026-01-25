import { api } from './configApi';
import { API_PATHS } from './api.routes';
import type {
  Podcast,
  ApiResponsePodcasts,
  ApiResponseDetailPodcastById,
} from './types/Podcasts';

export async function getListPodcasts(): Promise<ApiResponsePodcasts> {
  const { data } = await api.get<ApiResponsePodcasts>(API_PATHS.podcasts.list);
  return data;
}
export async function getPodcastDetail(
  id: string
): Promise<ApiResponseDetailPodcastById> {
  const { data } = await api.get<ApiResponseDetailPodcastById>(
    API_PATHS.podcasts.detail(id)
  );
  return data;
}

export async function getEpisodesDetail(id: string): Promise<Podcast[]> {
  const { data } = await api.get<Podcast[]>(API_PATHS.podcasts.detail(id));

  return data;
}
