import classNames from 'classnames/bind';

import styles from './Divider.module.scss';

const cx = classNames.bind(styles);

const Divider = () => {
  return <section className={cx('divider')} />;
};

export default Divider;
