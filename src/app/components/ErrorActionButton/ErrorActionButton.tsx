import classNames from 'classnames/bind';

import styles from './ErrorActionButton.module.scss';

const cx = classNames.bind(styles);

interface ErrorActionButtonProps {
  text: string;
  action: () => void;
}

const ErrorActionButton = ({ text, action }: ErrorActionButtonProps) => {
  return (
    <div className={cx('button')} onClick={action}>
      {text}
    </div>
  );
};

export default ErrorActionButton;
