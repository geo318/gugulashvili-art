import z from 'zod';

export const paintingSchema = z.object({
  name: z.string(),
  description: z.string(),
  size: z.string(),
  year: z.coerce.number(),
  image: z.object({ fullSize: z.string(), thumbnail: z.string() }),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  _id: z.string(),
});
