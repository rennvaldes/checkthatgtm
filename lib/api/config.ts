import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';

export function createApiInstance({
  baseURL,
  devMiddleware,
}: {
  baseURL: string;
  devMiddleware?: (api: AxiosInstance) => AxiosInstance;
}) {
  const config: CreateAxiosDefaults = {
    baseURL,
    withCredentials: !devMiddleware,
  };

  const instance = axios.create(config);

  return devMiddleware ? devMiddleware(instance) : instance;
}
