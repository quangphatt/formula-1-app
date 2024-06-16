import { useQuery } from '@tanstack/react-query';
import { get, Url } from '@services/api';

export const useTeam = (params = {}) => {
  const { data, isLoading } = useQuery({
    queryKey: ['team', params],
    queryFn: async () => {
      const result = await get(Url.teams, params);
      if (result.status === 200) {
        return result?.data?.response ?? [];
      }
      return [];
    },
  });

  return { teams: data, isLoading };
};