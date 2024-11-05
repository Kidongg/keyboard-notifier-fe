import classNames from 'classnames/bind';

import DropdownSelect from '@/app/components/DropdownSelect';

import styles from './FilterAndSortingButtons.module.scss';

const cx = classNames.bind(styles);

const FilterAndSortingButtons = () => {
  return (
    <div className={cx('container')}>
      <DropdownSelect items={['전체', '공제 예정', '공제 진행중', '공제 종료']} />
      <DropdownSelect items={['최신순', '오래된순', '낮은 가격순', '높은 가격순']} />
    </div>
  );
};

export default FilterAndSortingButtons;
