import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const multipartHeader = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  return ['post', 'patch'].some((m) => config.method === m)
    ? Object.assign(config, multipartHeader)
    : config;
});
