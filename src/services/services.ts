import { UploadData } from 'types';
import { axiosInstance } from './axios';

export const postImageData = async (data: UploadData) =>
  axiosInstance.post('/upload', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

export const getImages = async () => await axiosInstance.get('/paintings');
