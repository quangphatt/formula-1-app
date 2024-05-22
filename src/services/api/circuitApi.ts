import { get } from './axios';
import Url from './url';

export const getCircuits = async (params) => {
  const result = await get(Url.circuits, params);
  return result;
};
