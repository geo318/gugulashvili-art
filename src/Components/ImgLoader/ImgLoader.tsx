import { useImgLoader } from './useImgLoader';

export const ImgLoader: React.FC<{
  src: string;
  thumbnail: string;
  alt: string;
  priority?: boolean;
}> = ({ src, alt, thumbnail, priority = false }) => {
  const { isLoaded, handleImageLoad } = useImgLoader();
  return (
    <div className='relative w-full h-full overflow-hidden'>
      <img
        src={thumbnail}
        alt='placeholder'
        className={`absolute inset-0 w-full h-full object-cover blur-lg scale-125 duration-500 transition-all ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <img
        src={src}
        alt={alt}
        className={`absolute duration-200 inset-0 w-full h-full transition-opacity object-cover ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleImageLoad}
        loading={!priority ? 'lazy' : 'eager'}
      />
    </div>
  );
};
