import { useQuery } from '@tanstack/react-query';
import { RACES } from '@data/races';

export const useRace = (params: any = {}) => {
  const { data, isLoading } = useQuery({
    queryKey: ['race', params],
    queryFn: () => {
      const season = params?.season ?? '2025';
      return RACES[season as keyof typeof RACES];
    },
  });
  return { drivers: data, isLoading };
};
