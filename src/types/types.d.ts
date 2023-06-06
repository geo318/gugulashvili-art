import { uploadSchemaDefaults } from 'config';
import { Dispatch, SetStateAction } from 'react';
import { uploadSchema, paintingSchema, loginSchema } from 'schema';
import z from 'zod';

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

export type ImgData = z.infer<typeof paintingSchema>;

export type FormSubmitFunction<T extends { [key: T]: T }> = (
  data: T
) => Promise<void>;

export type LoginProps = z.infer<typeof loginSchema>;

export type StateFunc = (newValue: T | ((prevState: T) => T)) => void;

export type ViewProps = {
  imageArr: Array<ImgData>;
  index: number;
  turnSlide: StateFunc;
};
