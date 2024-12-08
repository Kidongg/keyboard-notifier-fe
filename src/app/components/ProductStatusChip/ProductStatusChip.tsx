import classNames from 'classnames/bind';

import { PRODUCT_STATUS_NAME } from '@/app/(shared)/constants';
import { ProductStatusEnum, ProductStatusType } from '@/app/types/api/product';

import styles from './ProductStatusChip.module.scss';

const cx = classNames.bind(styles);

type ProductStatusChipProps = {
  status: ProductStatusType;
};

const ProductStatusChip = ({ status }: ProductStatusChipProps) => {
  return (
    <span
      className={cx('chip', {
        'not-yet': status === ProductStatusEnum.NOT_YET,
        'in-progress': status === ProductStatusEnum.IN_PROGRESS,
      })}
    >
      {PRODUCT_STATUS_NAME[status]}
    </span>
  );
};

export default ProductStatusChip;
