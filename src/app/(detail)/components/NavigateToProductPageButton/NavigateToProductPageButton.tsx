import classNames from 'classnames/bind';

import styles from './NavigateToProductPageButton.module.scss';

const cx = classNames.bind(styles);

const NavigateToProductPageButton = () => {
  return (
    <button className={cx('button')}>
      <span className={cx('text')}>해당상품 보러가기</span>
      <img src="/assets/icons/external_link.png" alt="bell" width="24px" height="24px" />
    </button>
  );
};

export default NavigateToProductPageButton;
