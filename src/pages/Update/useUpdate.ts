import { useQuery } from '@tanstack/react-query';
import { getImages } from 'services';
import { ImgData } from 'types';

export const useUpdate = () => {
  const { isLoading, data } = useQuery({
    queryKey: ['paintings'],
    queryFn: getImages,
    retry: 1,
  });

  const images: ImgData[] = data?.data || [];

  return { images, isLoading };
};
