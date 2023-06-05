import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  const headers = {
    headers: {
      'Content-Type': 'multipart/form-data',
      ...(token && { Authorization: `Basic ${token}` }),
    },
  };

  if (config.method === 'get' && config.url?.includes('check'))
    return Object.assign(config, headers);

  return ['post', 'patch', 'delete'].some(
    (m) => config.method === m && !config.url?.includes('login')
  )
    ? Object.assign(config, headers)
    : config;
});
