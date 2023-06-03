import { useUpdate } from './useUpdate';

export const Update = () => {
  const { isLoading, images } = useUpdate();
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl font-bold mt-10'>Edit paintings</h1>
      {isLoading ? (
        <p>'loading'</p>
      ) : (
        <div className='p-8 mt-10 grid grid-cols-5 gap-5'>
          {images.map((img) => (
            <div
              key={img._id}
              className='col-span-1 border border-zinc-200 bg-white rounded-md'
            >
              <img
                className='object-cover rounded-md aspect-3/2'
                src={`${import.meta.env.VITE_BASE_URL}${img.image?.fullSize}`}
                alt={img.description}
              />
              <div className='text-xs flex flex-col p-3 gap-1 font-medium'>
                <p>
                  name: <span className='font-normal text-sm'>{img.name}</span>
                </p>
                <p>
                  desc:{' '}
                  <span className='font-normal text-sm'>{img.description}</span>
                </p>
                <p>
                  size: <span className='font-normal text-sm'>{img.size}</span>
                </p>
                <p>
                  year: <span className='font-normal text-sm'>{img.year}</span>
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
