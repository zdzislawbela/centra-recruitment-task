import axios from 'axios';

export const get = (url: string) => {
  const options = {
    url: url,
    headers: {
      auth: process.env.REACT_APP_API_KEY,
    },
  };

  return axios(options);
};
