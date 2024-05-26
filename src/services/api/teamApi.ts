import { get } from './axios';
import Url from './url';

export const getTeams = async (params) => {
  const result = await get(Url.teams, params);
  return result;
};
