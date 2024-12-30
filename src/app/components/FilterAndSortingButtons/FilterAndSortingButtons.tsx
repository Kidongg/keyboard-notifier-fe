import classNames from 'classnames/bind';

import ProductStatusDropdownSelect from '@/app/components/ProductStatusDropdownSelect';
import SortDropdownSelect from '@/app/components/SortDropdownSelect';

import styles from './FilterAndSortingButtons.module.scss';

const cx = classNames.bind(styles);

const FilterAndSortingButtons = () => {
  return (
    <div className={cx('container')}>
      <ProductStatusDropdownSelect />
      <SortDropdownSelect />
    </div>
  );
};

export default FilterAndSortingButtons;
