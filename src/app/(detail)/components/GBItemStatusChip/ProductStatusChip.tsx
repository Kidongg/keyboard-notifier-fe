import classNames from 'classnames/bind';

import { PRODUCT_STATUS_NAME, ProductStatusEnum, ProductStatusEnumType } from '@/app/types/api/product';

import styles from './ProductStatusChip.module.scss';

const cx = classNames.bind(styles);

type ProductStatusChipProps = {
  status: ProductStatusEnumType;
};

const ProductStatusChip = ({ status }: ProductStatusChipProps) => {
  return (
    <span
      className={cx('chip', {
        'not-yet': status === ProductStatusEnum.NOT_YET,
        'in-progress': status === ProductStatusEnum.IN_PROGRESS,
        done: status === ProductStatusEnum.DONE,
      })}
    >
      {PRODUCT_STATUS_NAME[status]}
    </span>
  );
};

export default ProductStatusChip;
