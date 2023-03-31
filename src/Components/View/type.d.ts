import { Image } from 'types';

export interface ViewProps {
  imageArr?: Image[];
  index: number;
  close?: () => void;
  setIndex: function;
}
