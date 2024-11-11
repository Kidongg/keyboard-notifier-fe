'use client';

import classNames from 'classnames/bind';
import Slider from 'react-slick';

import styles from './GBItemCarousel.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles);

const GBItemCarousel = () => {
  const settings = {
    arrows: false,
    dots: true,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <section className={cx('container')}>
      <Slider {...settings}>
        <img className={cx('image')} src="/assets/images/gb-thumbnail.png" alt="image" width="100%" height="520px" />
        <img className={cx('image')} src="/assets/images/gb-thumbnail.png" alt="image" width="100%" height="520px" />
        <img className={cx('image')} src="/assets/images/gb-thumbnail.png" alt="image" width="100%" height="520px" />
        <img className={cx('image')} src="/assets/images/gb-thumbnail.png" alt="image" width="100%" height="520px" />
        <img className={cx('image')} src="/assets/images/gb-thumbnail.png" alt="image" width="100%" height="520px" />
      </Slider>
    </section>
  );
};

export default GBItemCarousel;
