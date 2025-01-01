import classNames from 'classnames/bind';

import { PRODUCT_CATEGORY_NAME } from '@/app/(shared)/constants';
import { ProductCategoryEnumType } from '@/app/types/api/product';

import styles from './ProductCategoryTypeChip.module.scss';

const cx = classNames.bind(styles);

type ProductCategoryTypeChipProps = {
  categoryType: ProductCategoryEnumType;
};

const ProductCategoryTypeChip = ({ categoryType }: ProductCategoryTypeChipProps) => {
  return <span className={cx('chip')}>{PRODUCT_CATEGORY_NAME[categoryType]}</span>;
};

export default ProductCategoryTypeChip;
