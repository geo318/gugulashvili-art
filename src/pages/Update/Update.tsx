import {
  EditIcon,
  Flash,
  UpdatePaintingModal,
  useFlashMessage,
} from 'Components';
import { useUpdate } from './useUpdate';
import { Spinner } from 'Components/Spinner';
import { Link } from 'react-router-dom';

export const Update = () => {
  const { isFlashActive, setIsFlashActive, fleshMessage, handleFlashMessage } =
    useFlashMessage();
  const {
    handleImageSelect,
    selectedImage,
    isModalOpen,
    toggleModal,
    isLoading,
    refetch,
    images,
  } = useUpdate();

  return (
    <div className='flex flex-col items-center'>
      <Flash
        flashInfo={fleshMessage!}
        isActive={isFlashActive}
        setIsActive={setIsFlashActive}
      />
      <div className='flex items-center justify-center w-full px-10 mt-10'>
        <Link to='/' className='text-blue-500 font-medium hover:underline'>
          Home
        </Link>
        <h1 className='text-3xl font-bold mx-auto'>Edit paintings</h1>
        <Link
          to='/upload'
          className='py-1 px-5 bg-blue-500 rounded-md text-white hover:bg-blue-600'
        >
          Upload
        </Link>
      </div>

      {isLoading ? (
        <div className='mt-14'>
          <Spinner />
        </div>
      ) : (
        <div className='p-8 mt-10 grid grid-cols-5 gap-5'>
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
                  className='absolute inset-0 bg-white bg-opacity-60 group-hover:flex hidden text-blue-500 cursor-pointer items-center justify-center pb-10'
                  onClick={() => handleImageSelect(img)}
                >
                  <EditIcon />
                </div>
                <img
                  className='object-cover rounded-md aspect-3/2'
                  src={`${import.meta.env.VITE_BASE_URL}${img.image?.fullSize}`}
                  alt={img.description}
                />

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
