import { get } from './axios';
import Url from './url';

export const getCompetitions = async (params) => {
  const result = await get(Url.competitions, params);
  return result;
};
