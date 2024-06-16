import { useQuery } from '@tanstack/react-query';
import { get, Url } from '@services/api';

export const useCircuit = (params = {}) => {
  const { data, isLoading } = useQuery({
    queryKey: ['circuit', params],
    queryFn: async () => {
      const result = await get(Url.circuits, params);
      if (result.status === 200) {
        return result?.data?.response ?? [];
      }
      return [];
    },
  });

  return { circuits: data, isLoading };
};
