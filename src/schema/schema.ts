import { uploadInputDefaultValues as uploadSchemaDefaults } from 'config';
import z from 'zod';

const MAX_SIZE = 2000000;
const MIME_TYPES = ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'];
const refineImage = z
  .instanceof(FileList)
  .refine((file: FileList) => file?.length, 'please, select an image')
  .refine((file) => file[0]?.size <= MAX_SIZE, 'image is too big')
  .refine((file) => MIME_TYPES.includes(file[0]?.type), 'incorrect file type');

export const uploadSchemaBase = ({ partial = false }) =>
  z.object({
    name: z
      .string()
      .nonempty('image name is empty')
      .min(3, 'image name is too short')
      .max(50, 'image name is too long'),
    description: z
      .string()
      .nonempty('shouldn`t be empty')
      .min(10, 'description is too short')
      .max(100, 'description is too long')
      .default(uploadSchemaDefaults.description),
    size: z
      .string()
      .nonempty('shouldn`t be empty')
      .min(3, 'size is too short')
      .max(50, 'size is too long')
      .default(uploadSchemaDefaults.size),
    year: z.coerce
      .number()
      .positive('should be more then 0')
      .min(1900, 'should be more then 1900')
      .max(
        new Date().getFullYear(),
        `shouldn't be more then ${new Date().getFullYear()}`
      )
      .default(uploadSchemaDefaults.year),
    img: partial ? z.instanceof(FileList) : refineImage,
  });

export const uploadSchemaPartial = uploadSchemaBase({
  partial: true,
})
  .partial()
  .transform((data) => ({
    ...data,
    ...(data?.img && { img: data.img[0] }),
  }));

export const uploadSchema = uploadSchemaBase({}).transform((data) => ({
  ...data,
  img: data?.img[0],
}));

export const imgSchema = z.object({
  name: z.string(),
  description: z.string(),
  size: z.string(),
  year: z.coerce.number(),
  image: z.object({ fullSize: z.string(), thumbnail: z.string() }),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  _id: z.string(),
});
