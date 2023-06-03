import { deleteImage, updateImageData } from 'services';
import { UploadData } from 'types';
import { Props } from './type';
import { useState } from 'react';

export const useUpdatePaintingModal = ({
  defaults,
  toggleModal,
  refetch,
}: Props) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const toggleDeleteDialog = () => setIsDeleting((prev) => !prev);

  const handleDelete = async () => {
    try {
      const res = await deleteImage(defaults._id);
      if (res.status === 200) {
        toggleDeleteDialog();
        toggleModal();
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (data: Partial<UploadData>) => {
    try {
      const res = await updateImageData(data, defaults._id);
      if (res.status === 201) {
        toggleModal();
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { handleSubmit, isDeleting, toggleDeleteDialog, handleDelete };
};
