import { useRouter } from 'next/navigation';

import classNames from 'classnames/bind';

import ProductStatusChip from '@/app/(detail)/components/GBItemStatusChip/ProductStatusChip';
import ProductCategoryTypeChip from '@/app/(detail)/components/ProductCategoryTypeChip';
import { formatDate } from '@/app/(shared)/utils/date';
import { formatPrice } from '@/app/(shared)/utils/price';
import { useProductCategoryOption } from '@/app/store/useProductCategoryOption';
import { useProductStatusOption } from '@/app/store/useProductStatusOption';
import { ProductCategoryEnumType, ProductStatusEnumType } from '@/app/types/api/product';

import styles from './GBitem.module.scss';

const cx = classNames.bind(styles);

type GBItemProps = {
  name: string;
  price: number;
  unit: string;
  startDate: string;
  endDate: string;
  imageUrl: string[];
  status: ProductStatusEnumType;
  categoryType: ProductCategoryEnumType;
  id: number;
};

const mappingStatusLabel = (type: ProductStatusEnumType) => {
  const statusLabels: Record<ProductStatusEnumType, string> = {
    ALL: '전체',
    NOT_YET: '진행예정',
    IN_PROGRESS: '진행중',
    DONE: '공제완료',
  };

  return statusLabels[type];
};

const GBItem = ({ name, price, unit, startDate, endDate, imageUrl, status, categoryType, id }: GBItemProps) => {
  const { productCategoryOption, setProductCategoryOption } = useProductCategoryOption();
  const { productStatusOption, setProductStatusOption } = useProductStatusOption();

  const router = useRouter();

  const moveToDetailPage = (id: number) => {
    router.push(`/${id}`);

    setProductCategoryOption({
      ...productCategoryOption,
      type: categoryType,
    });

    setProductStatusOption({
      ...productStatusOption,
      type: status,
      label: mappingStatusLabel(status),
    });
  };

  return (
    <li
      className={cx('item')}
      role="button"
      style={{
        backgroundImage: `url(${imageUrl[0]})`,
      }}
      onClick={() => moveToDetailPage(id)}
    >
      <div className={cx('badge-wrap')}>
        <ProductStatusChip status={status} />
        <ProductCategoryTypeChip categoryType={categoryType} />
      </div>
      <div className={cx('content-wrap')}>
        <div className={cx('title')}>{name}</div>
        <div className={cx('price')}>
          <span className={cx('value')}>{formatPrice(price)}</span>
          <span className={cx('currency')}>{unit}</span>
        </div>
        <div className={cx('date')}>{`${formatDate(startDate)} - ${formatDate(endDate)}`}</div>
      </div>
    </li>
  );
};

export default GBItem;
