import { api } from './configApi';
import { API_PATHS } from './api.routes';
import type {
  ApiResponsePodcasts,
  ApiResponseDetailPodcastById,
} from './types/Podcasts';

export async function getListPodcasts(): Promise<ApiResponsePodcasts> {
  const { data } = await api.get<ApiResponsePodcasts>(API_PATHS.podcasts.list);
  return data;
}
export async function getPodcastDetail(
  podcastId: string
): Promise<ApiResponseDetailPodcastById> {
  const { data } = await api.get<ApiResponseDetailPodcastById>(
    API_PATHS.podcasts.detail(podcastId)
  );
  return data;
}
