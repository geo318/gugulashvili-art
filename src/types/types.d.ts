import { uploadSchemaDefaults } from 'config';
import { uploadSchema } from 'schema';

export interface Props {
  children?: React.Node;
  className?: string;
}

export interface SlideData {
  name: string;
  size: string;
  info: string;
  year: number;
  key: keyof Image;
}
export interface Image {
  [key: string]: value;
}
export interface ImageData extends SlideData, Image {}

export type UploadDefaults = typeof uploadSchemaDefaults;

export type UploadData = z.infer<typeof uploadSchema>;
