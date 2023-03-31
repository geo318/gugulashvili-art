import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideProps } from './type';
import { thumbnails } from 'assets/images/paintings/thumbnails';
import { slideData } from './data';
import { images } from 'assets';

export const Slides = ({ hovered, setHovered, setImageIndex }: SlideProps) => {
  return (
    <Swiper
      className='pt-20'
      slidesPerView={5}
      grabCursor
      longSwipes
      slidesOffsetAfter={800}
    >
      {slideData.map((i, index) => (
        <SwiperSlide
          className={
            index % 2 && !hovered
              ? 'min-w-[22%]'
              : hovered
              ? 'min-w-[20%]'
              : 'min-w-[18%]'
          }
          key={i.name}
        >
          <div
            className={`w-full h-full ${
              hovered === `${index}` ? 'active' : !hovered ? '' : 'passive'
            } overflow-hidden`}
            onMouseOver={() => setHovered(`${index}`)}
            onClick={() => {
              setImageIndex(index);
              setHovered('');
            }}
          >
            <img
              src={images[i.key]}
              alt={i.info}
              className='w-full h-full aspect-6/5 object-cover'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
