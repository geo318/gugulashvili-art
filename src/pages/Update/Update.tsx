import {
  Flash,
  EditIcon,
  UpdatePaintingModal,
  NavBar,
  ImgLoader,
} from 'Components';
import { useUpdate } from './useUpdate';
import { Spinner } from 'Components/Spinner';
import { getImage } from 'helpers';

export const Update = () => {
  const {
    handleFlashMessage,
    handleImageSelect,
    setIsFlashActive,
    isFlashActive,
    selectedImage,
    isPageLoading,
    flashMessage,
    isModalOpen,
    toggleModal,
    isLoading,
    refetch,
    images,
  } = useUpdate();

  return (
    <div className='flex flex-col items-center'>
      <NavBar nextLink='/upload' nextLabel='Upload new' />
      <Flash
        flashInfo={flashMessage!}
        isActive={isFlashActive}
        setIsActive={setIsFlashActive}
      />
      <h1 className='text-3xl font-bold mx-auto'>Edit paintings</h1>
      {isLoading || isPageLoading ? (
        <div className='mt-14 pt-14'>
          <Spinner />
        </div>
      ) : (
        <div className='p-8 mt-10 grid grid-cols-5 gap-5 mb-16 w-full'>
          {isModalOpen && selectedImage && (
            <UpdatePaintingModal
              handleFlashMessage={handleFlashMessage}
              toggleModal={toggleModal}
              defaults={selectedImage}
              refetch={refetch}
            />
          )}
          {images
            .slice()
            .reverse()
            .map((img) => (
              <div
                key={img._id}
                className='group col-span-1 border border-zinc-200 bg-white rounded-md relative'
              >
                <div
                  className='absolute inset-0 z-20 bg-white bg-opacity-60 group-hover:flex hidden text-blue-500 cursor-pointer items-center justify-center pb-10'
                  onClick={() => handleImageSelect(img)}
                >
                  <EditIcon />
                </div>
                <div className='aspect-[7/5]'>
                  <ImgLoader
                    alt={img.name}
                    src={getImage(img.image?.fullSize)}
                    thumbnail={getImage(img.image?.thumbnail)}
                  />
                </div>

                <div className='text-xs flex flex-col p-3 gap-1 font-medium'>
                  <p>
                    name:{' '}
                    <span className='font-normal text-sm'>{img.name}</span>
                  </p>
                  <p>
                    desc:{' '}
                    <span className='font-normal text-sm'>
                      {img.description}
                    </span>
                  </p>
                  <p>
                    size:{' '}
                    <span className='font-normal text-sm'>{img.size}</span>
                  </p>
                  <p>
                    year:{' '}
                    <span className='font-normal text-sm'>{img.year}</span>
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Update;
