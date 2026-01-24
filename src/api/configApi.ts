import axios from 'axios';

const EXPIRES_CACHE_FETCH = Number(import.meta.env.VITE_EXPIRES_CACHE_FETCH);

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_HOST,
});

api.interceptors.request.use((config) => {
  if (config.method !== 'get' || !config.url) return config;

  const urlCache = config.url;
  const dataCached = localStorage.getItem(urlCache);

  if (dataCached) {
    const { data, time } = JSON.parse(dataCached);

    if (Date.now() - time < EXPIRES_CACHE_FETCH) {
      return Promise.reject({ data, config });
    }

    localStorage.removeItem(urlCache);
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    if (response.config.method === 'get' && response.config.url) {
      localStorage.setItem(
        response.config.url,
        JSON.stringify({ data: response.data, time: Date.now() })
      );
    }
    return response;
  },
  (error) => {
    if (error.data) {
      return Promise.resolve({ data: error.data });
    }
    return Promise.reject(error);
  }
);
