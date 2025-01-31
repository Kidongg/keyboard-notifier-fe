'use client';

import classNames from 'classnames/bind';
import Slider from 'react-slick';

import styles from './GBItemCarousel.module.scss';

const cx = classNames.bind(styles);

type GBItemCarouselProps = {
  imageUrlList: string[];
};

const GBItemCarousel = ({ imageUrlList }: GBItemCarouselProps) => {
  const settings = {
    arrows: false,
    dots: true,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '50%',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <section className={cx('container')}>
      <Slider {...settings}>
        {imageUrlList.map((url, index) => (
          <img className={cx('image')} src={url} key={index} alt="image" width="584px" height="520px" />
        ))}
      </Slider>
    </section>
  );
};

export default GBItemCarousel;
