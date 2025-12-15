import { AxiosInstance } from 'axios';
import QueryString from 'qs';

import { STRAPI_BASE_URL, STRAPI_DEV_TOKEN } from '@/static/constants';

import { createApiInstance } from '../config';

export const strapiAPI = createApiInstance({
  baseURL: `${STRAPI_BASE_URL ?? ''}/api`,
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
    console.log('[getWithQsParams] Full URL:', url.substring(0, 500)); // Log first 500 chars
  }

  const { data } = await strapiAPI({ method: 'GET', url });

  return data;
}
