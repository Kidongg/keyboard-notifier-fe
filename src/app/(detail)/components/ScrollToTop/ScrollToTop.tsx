import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';

import styles from './ScrollToTop.module.scss';

const cx = classNames.bind(styles);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button onClick={scrollToTop} className={cx('scroll-to-top')}>
        <img src="/assets/icons/arrow-up.svg" alt="arrow-up" width="32px" height="32px" />
      </button>
    )
  );
};

export default ScrollToTop;
