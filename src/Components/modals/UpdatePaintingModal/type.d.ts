import { ImgData } from 'types';

export type Props = {
  toggleModal: () => void;
  defaults: ImgData;
  refetch: () => void;
  handleFlashMessage: (error?: boolean) => void;
};
