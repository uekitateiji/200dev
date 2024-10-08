import axios from './api';

export const login = async (username: string, password: string) => {
  const response = await axios.post('/token', null, {
    params: {
      username,
      password,
    },
  });
  return response.data;
};
