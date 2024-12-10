import classNames from 'classnames/bind';

import ProductCategoryTypeChip from '@/app/(detail)/components/ProductCategoryTypeChip';
import { formatDate } from '@/app/(shared)/utils/date';
import { formatPrice } from '@/app/(shared)/utils/price';
import Notification from '@/app/components/Notification';
import ProductStatusChip from '@/app/components/ProductStatusChip';
import { ProductCategoryType, ProductStatusType } from '@/app/types/api/product';

import styles from './GBitem.module.scss';

const cx = classNames.bind(styles);

type GBItemProps = {
  name: string;
  price: number;
  unit: string;
  startDate: string;
  endDate: string;
  imageUrl: string[];
  productUrl: string;
  status: ProductStatusType;
  categoryType: ProductCategoryType;
};

const GBItem = ({ name, price, unit, startDate, endDate, imageUrl, productUrl, status, categoryType }: GBItemProps) => {
  const moveToDetailPage = () => {
    window.open(productUrl, '_blank', 'noopener noreferrer');
  };

  return (
    <li
      className={cx('list')}
      role="button"
      style={{
        backgroundImage: `url(${imageUrl[0]})`,
      }}
      onClick={moveToDetailPage}
    >
      <div className={cx('chip-wrap')}>
        <ProductStatusChip status={status} />
        <ProductCategoryTypeChip categoryType={categoryType} />
      </div>
      <div>
        <h3 className={cx('name')}>{name}</h3>
        <p className={cx('price')}>{formatPrice(price, unit)}</p>
        <p className={cx('date')}>{`${formatDate(startDate)} - ${formatDate(endDate)}`}</p>
      </div>
      <Notification />
    </li>
  );
};

export default GBItem;
