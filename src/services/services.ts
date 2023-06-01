import { UploadData } from 'types';
import { axiosInstance } from './axios';

export const postImageData = async (data: UploadData) =>
  axiosInstance.post('/upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

// export const postImageData = async (data: UploadData) => {
//   const response = await fetch(`${import.meta.env.VITE_BASE_URL}/upload`, {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   });
//   return await response.json();
// };
