import z from 'zod';

const MAX_SIZE = 2000000;
const MIME_TYPES = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'];

export const imgSchema = z
  .instanceof(FileList)
  .refine((file: FileList) => file?.length, 'please, select an image')
  .refine((file) => file[0]?.size <= MAX_SIZE, 'image is too big')
  .refine((file) => MIME_TYPES.includes(file[0]?.type), 'incorrect file type');
