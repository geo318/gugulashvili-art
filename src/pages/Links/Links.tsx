import { ArrowLink, Footer, Layout, Navigate } from 'Components';
import { motion } from 'framer-motion';
import { externals } from 'assets';
import { Link } from 'react-router-dom';

export const Links = () => {
  return (
    <motion.div>
      <Layout className='select-none flex flex-col min-h-full'>
        <motion.div
          initial={{ opacity: 0, scale: 0.85, translateX: '-20vw' }}
          animate={{ opacity: 1, scale: 1, translateX: 0 }}
          exit={{ opacity: 0, scale: 0.85, translateX: '-20vw' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex flex-col min-h-screen lg:pt-32 pt-10'
        >
          <div className='mb-10 grid xl:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10 lg:px-16 px-4 relative min-h-full'>
            {externals.map((e, i) => {
              return (
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
                              <img
                                src={e.heading}
                                alt='art-mine'
                                className='h-full w-full'
                              />
                            </div>
                          </div>
                          <div className='flex mt-auto align-middle justify-center relative'>
                            <div className='w-1/2'>
                              <img
                                src={e.avatar}
                                alt='avatar'
                                className='w-full h-full'
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
                              className='h-full w-full aspect-square object-contain max-w-[23vw] max-h-[23vw]'
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
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
