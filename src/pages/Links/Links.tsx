import { ArrowLink, Footer, ImgLoader, Layout, Navigate } from 'Components';
import { motion } from 'framer-motion';
import { externals } from 'assets';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import { Spinner } from 'Components/Spinner';

export const Links = () => {
  const [isPlayerLoading, setIsPlayerLoading] = useState<boolean>(true);
  const handleReady = () => {
    setIsPlayerLoading(false);
  };

  const handleBuffer = () => {
    setIsPlayerLoading(true);
  };
  return (
    <motion.div>
      <Layout className='select-none flex flex-col min-h-full'>
        <motion.div
          initial={{ opacity: 0, scale: 0.85, translateX: '-20vw' }}
          animate={{ opacity: 1, scale: 1, translateX: 0 }}
          exit={{ opacity: 0, scale: 0.85, translateX: '-20vw' }}
          transition={{ duration: 1, delay: 0.3 }}
          className='flex flex-col min-h-screen lg:pt-32 pt-10'
        >
          <div className='mb-10 grid xl:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-2 lg:px-16 px-4 relative min-h-full'>
            <div className='flex w-full justify-center items-center'>
              {isPlayerLoading && <Spinner />}
              <div
                className={`w-full h-full justify-center items-center aspect-6/5  ${
                  isPlayerLoading ? 'hidden' : 'flex'
                }`}
              >
                <ReactPlayer
                  url='https://vimeo.com/823710805'
                  controls
                  width={'100%'}
                  height={'60%'}
                  style={{ aspectRatio: '6/5' }}
                  onReady={handleReady}
                  onBuffer={handleBuffer}
                />
              </div>
            </div>
            {externals.map((e, i) => (
              <Link key={i} to={e.link} target='_blank'>
                <div
                  className={`flex flex-col ${
                    !e.logo ? '' : 'mr-[30%] bg-[#F0F0F0]'
                  } cursor-pointer link-item`}
                >
                  <div className='p-8 relative'>
                    {e.logo && e.heading ? (
                      <>
                        <div className=' mb-8 relative pt-[25%]'>
                          <div className='absolute top-0 min-w-[160%] heading'>
                            <ImgLoader
                              src={e.avatar}
                              thumbnail={e.thumb}
                              alt={e.heading}
                            />
                          </div>
                        </div>
                        <div className='flex mt-auto align-middle justify-center relative'>
                          <div className='w-1/2'>
                            <ImgLoader
                              src={e.avatar}
                              thumbnail={e.thumb}
                              alt={e.heading}
                            />
                          </div>
                          <div className='aspect-square flex items-center w-1/2'>
                            <div className='min-w-full flex pl-8 justify-center'>
                              <img
                                src={e.logo}
                                alt='agora-logo'
                                className='w-full maw-h-full max-w-[5rem]'
                              />
                            </div>
                          </div>
                          <div className='absolute bottom-0 -right-16 arrow'>
                            <ArrowLink />
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className='flex mt-auto align-middle justify-center relative'>
                        <div className=''>
                          <img
                            src={e.avatar}
                            alt='agora-logo'
                            className='h-full w-full aspect-square object-contain lg:max-w-[23vw] lg:max-h-[23vw]'
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Navigate link='/' />
          <div className='flex w-full items-center justify-center '>
            <div className='flex mb-auto lg:flex-row flex-col-reverse items-center text-sm lg:gap-8 gap-3 mt-5 font-normal'>
              <a
                href='mailto:zuragugulashvili73@gmail.com'
                className='underline text-gray-700 hover:text-black'
              >
                Email: zuragugu73@gmail.com
              </a>
              <a
                className='underline text-gray-700 hover:text-black'
                href='https://wa.me/995599988525'
              >
                WhatsApp: +995 599 988 525
              </a>
            </div>
          </div>
          <Footer />
        </motion.div>
      </Layout>
    </motion.div>
  );
};

export default Links;
