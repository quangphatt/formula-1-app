import { DRIVERS } from '@data';

export const useDriver = (params = {}) => {
  return { drivers: DRIVERS, isLoading: false };
};
