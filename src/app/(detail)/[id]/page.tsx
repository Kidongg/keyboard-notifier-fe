import classNames from 'classnames/bind';

import Divider from '@/app/(detail)/components/Divider';
import GBItemGallery from '@/app/(detail)/components/GBItemGallery';
import ProductDetailContainer from '@/app/(detail)/containers/ProductDetailContainer';

import styles from './page.module.scss';

const cx = classNames.bind(styles);

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className={cx('main')}>
      <ProductDetailContainer productId={params.id} />
      <Divider />
      <GBItemGallery />
    </main>
  );
}
