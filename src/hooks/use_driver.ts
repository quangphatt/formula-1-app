import { useQuery } from '@tanstack/react-query';
import { DRIVERS } from '@data/drivers';

export const useDriver = (params = {}) => {
  const { data, isLoading } = useQuery({
    queryKey: ['driver', params],
    queryFn: () => {
      return DRIVERS;
    },
  });
  return { drivers: data, isLoading };
};
