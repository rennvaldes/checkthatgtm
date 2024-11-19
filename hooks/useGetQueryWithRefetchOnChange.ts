import { QueryFunction, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useEffect } from 'react';

type Params<TGetData, TQueryKey> = {
  key: TQueryKey;
  getFn: QueryFunction<TGetData, TQueryKey[]>;
  params?: unknown[];
  options?: UseQueryOptions<TGetData, unknown, TGetData, TQueryKey[]>;
};

function useGetQueryWithRefetchOnChange<T, Y>({ key, getFn, params = [], options }: Params<T, Y>) {
  const query = useQuery({ queryKey: [key], queryFn: getFn, refetchOnWindowFocus: false, ...options });

  useEffect(() => {
    query.refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, params);

  return query;
}

export default useGetQueryWithRefetchOnChange;
