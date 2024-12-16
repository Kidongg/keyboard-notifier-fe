import classNames from 'classnames/bind';

import styles from './CheckBox.module.scss';

const cx = classNames.bind(styles);

interface CheckBoxProps {
  checked: boolean;
  alt: string;
  onClick: () => void;
}

const CheckBox = ({ checked, alt, onClick }: CheckBoxProps) => {
  const src = checked ? '/assets/icons/checkbox-enabled.png' : '/assets/icons/checkbox-disabled.png';

  return <img className={cx('check')} onClick={onClick} src={src} alt={alt} width="24px" height="24px" />;
};

export default CheckBox;
