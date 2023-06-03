import { UploadForm } from 'Components';
import { useUpload } from './useUpload';

export const Upload = () => {
  const { handleDataUpload, defaultValues, img } = useUpload();
  return (
    <div className='flex flex-col items-center h-screen mt-28'>
      <h2 className='text-xl font-semibold mb-10'>Upload new painting</h2>
      <div className='bg-white border border-slate-100 rounded-md w-full max-w-xs p-5 shrink'>
        <UploadForm
          handleSubmit={handleDataUpload}
          defaultValues={defaultValues}
        />
      </div>
      {img?.name && (
        <div className='mt-10'>
          <img
            src={`${import.meta.env.VITE_BASE_URL}${img.image?.thumbnail}`}
            alt=''
          />
        </div>
      )}
    </div>
  );
};

export default Upload;
