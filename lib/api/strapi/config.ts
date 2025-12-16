import { AxiosInstance } from 'axios';
import QueryString from 'qs';

import { STRAPI_BASE_URL, STRAPI_DEV_TOKEN } from '@/static/constants';

import { createApiInstance } from '../config';

// Ensure we have a valid base URL for Strapi API
const getBaseUrl = () => {
  const url = STRAPI_BASE_URL || process.env.NEXT_PUBLIC_STRAPI_BASE_URL || 'http://localhost:1337';

  if (!url || url === 'http://localhost:1337') {
    console.warn('NEXT_PUBLIC_STRAPI_BASE_URL not set, using localhost fallback');
  }

  return `${url}/api`;
};

export const strapiAPI = createApiInstance({
  baseURL: getBaseUrl(),
  devMiddleware(api: AxiosInstance) {
    if (!STRAPI_DEV_TOKEN) return api;

    api.interceptors.request.use(config => {
      config.headers['Authorization'] = `Bearer ${STRAPI_DEV_TOKEN}`;
      return config;
    });

    return api;
  },
});

export async function getWithQsParams(path: string, params?: any) {
  let url = path;
  if (params) {
    const queryString = QueryString.stringify(params);
    url += `?${queryString}`;
  }

  const { data } = await strapiAPI({ method: 'GET', url });

  return data;
}
