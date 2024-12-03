import classNames from 'classnames/bind';

import { ProductStatusEnum, ProductStatusType } from '@/app/types/api/product';

import styles from './ProductStatusChip.module.scss';

const cx = classNames.bind(styles);

type ProductStatusChipProps = {
  status: ProductStatusType;
};

const PRODUCT_STATUS_LABEL = {
  [ProductStatusEnum.NOT_YET]: '진행예정',
  [ProductStatusEnum.IN_PROGRESS]: '진행중',
  [ProductStatusEnum.DONE]: '공제완료',
};

const ProductStatusChip = ({ status }: ProductStatusChipProps) => {
  return (
    <span
      className={cx('chip', {
        'not-yet': status === ProductStatusEnum.NOT_YET,
        'in-progress': status === ProductStatusEnum.IN_PROGRESS,
      })}
    >
      {PRODUCT_STATUS_LABEL[status]}
    </span>
  );
};

export default ProductStatusChip;
