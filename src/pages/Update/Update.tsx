import { EditIcon, UpdatePaintingModal } from 'Components';
import { useUpdate } from './useUpdate';
import { Spinner } from 'Components/Spinner';

export const Update = () => {
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
      <h1 className='text-3xl font-bold mt-10'>Edit paintings</h1>
      {isLoading ? (
        <div className='mt-14'>
          <Spinner />
        </div>
      ) : (
        <div className='p-8 mt-10 grid grid-cols-5 gap-5'>
          {isModalOpen && selectedImage && (
            <UpdatePaintingModal
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
