import { useQuery } from '@tanstack/react-query';
import { get, Url } from '@services/api';

export const useCompetition = (params = {}) => {
  const { data, isLoading } = useQuery({
    queryKey: ['competition', params],
    queryFn: async () => {
      const result = await get(Url.competitions, params);
      if (result.status === 200) {
        return result?.data?.response ?? [];
      }
      return [];
    },
  });

  return { competitions: data, isLoading };
};
