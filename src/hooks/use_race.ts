import { useQuery } from '@tanstack/react-query';
import { RACES } from '@data';

export const useRace = (params = {}) => {
  const { data, isLoading } = useQuery({
    queryKey: ['race', params],
    queryFn: () => {
      const season = params?.season ?? '2024';
      return RACES[season];
    },
  });
  return { drivers: data, isLoading };
};
