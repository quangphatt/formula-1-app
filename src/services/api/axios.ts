import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import { API_HOST, API_KEY } from '@env';

export const get = async (suburl, params = {}) => {
  const state = await NetInfo.fetch();
  if (state.isConnected) {
    let result = await axios.get('https://' + API_HOST + suburl, {
      params,
      headers: {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY,
      },
    });
    return result;
  }
  return { data: { httpCode: 0 } };
};
