import { get } from './axios';
import Url from './url';

export const getDrivers = async (params) => {
  const result = await get(Url.drivers, params);
  return result;
};