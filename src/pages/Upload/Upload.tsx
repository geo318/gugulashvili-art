import { Flash, UploadForm } from 'Components';
import { useUpload } from './useUpload';
import { Link } from 'react-router-dom';

export const Upload = () => {
  const {
    setIsFlashActive,
    handleDataUpload,
    isFlashActive,
    setIsUploaded,
    defaultValues,
    flashMessage,
    isUploaded,
  } = useUpload();
  return (
    <div className='flex flex-col items-center h-screen'>
      <Flash
        flashInfo={flashMessage!}
        isActive={isFlashActive}
        setIsActive={setIsFlashActive}
      />
      {!isUploaded ? (
        <>
          <div className='flex items-center justify-center w-full px-10 my-10'>
            <Link
              to='/'
              className='text-blue-500 font-medium hover:underline w-20'
            >
              Home
            </Link>
            <h1 className='text-3xl font-bold mx-auto'>Upload new painting</h1>
            <Link
              to='/update'
              className='text-blue-500 font-medium hover:underline w-20'
            >
              Paintings
            </Link>
          </div>
          <div className='bg-white border border-slate-100 rounded-md w-full max-w-xs p-5 shrink mt-10'>
            <UploadForm
              handleSubmit={handleDataUpload}
              defaultValues={defaultValues}
            />
          </div>
        </>
      ) : (
        <div className='bg-white border border-slate-100 rounded-md w-full max-w-xs p-5 shrink mt-20'>
          <h2 className='text-xl font-semibold mb-10 text-center text-green-500'>
            Uploaded!
          </h2>
          <div className='flex flex-col justify-center items-center gap-2'>
            <button
              onClick={() => setIsUploaded(false)}
              className='px-5 py-2 rounded-md mb-2 bg-blue-500 text-white hover:bg-blue-600'
            >
              Upload Again
            </button>
            <Link
              to='/update'
              className='text-blue-500 cursor-pointer hover:underline text-sm'
            >
              See uploaded
            </Link>
            <Link
              to='/'
              className='text-blue-500 cursor-pointer hover:underline text-sm'
            >
              Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Upload;
