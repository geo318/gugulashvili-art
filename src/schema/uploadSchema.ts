import { uploadInputDefaultValues as uploadSchemaDefaults } from 'config';
import { imgSchema } from './shared';
import z from 'zod';

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
    img: partial ? z.instanceof(FileList) : imgSchema,
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
