import axios from 'axios';
import { TIMEOUT } from '../consts/api';

export const get = (url: string) => {
  const options = {
    url: url,
    headers: {
      auth: process.env.REACT_APP_API_KEY,
    },
    timeout: TIMEOUT,
  };

  return axios(options);
};
