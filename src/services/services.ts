import { LoginProps, UploadData } from 'types';
import { axiosInstance } from './axios';

export const postImageData = async (data: UploadData) =>
  await axiosInstance.post('/upload', data);

export const updateImageData = async (data: Partial<UploadData>, id: string) =>
  await axiosInstance.patch(`/update/${id}`, data);

export const getImages = async () => await axiosInstance.get('/paintings');

export const deleteImage = async (id: string) =>
  await axiosInstance.delete(`/delete/${id}`);

export const login = async (auth: LoginProps) =>
  await axiosInstance.post('/login', auth);

export const checkAuth = async () => await axiosInstance.get('/check');
