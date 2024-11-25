import classNames from 'classnames/bind';

import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

interface BadgeProps {
  text: string;
  type: string;
}

const Badge = ({ text, type }: BadgeProps) => {
  const className = cx({
    planned: type === 'status' && text === '진행예정',
    progress: type === 'status' && text === '진행중',
    completed: type === 'status' && text === '공제완료',
    category: type === 'category',
  });

  return <div className={className}>{text}</div>;
};

export default Badge;
