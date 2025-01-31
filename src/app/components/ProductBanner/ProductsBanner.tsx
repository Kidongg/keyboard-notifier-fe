import classNames from 'classnames/bind';
import Slider from 'react-slick';

import ProductCategoryTypeChip from '@/app/(detail)/components/ProductCategoryTypeChip';
import ProductStatusChip from '@/app/components/ProductStatusChip';
import { ProductsRes } from '@/app/types/api/product';

import styles from './ProductsBanner.module.scss';

const cx = classNames.bind(styles);

type ProductsBannerProps = {
  products?: ProductsRes;
};

const ProductsBanner = ({ products }: ProductsBannerProps) => {
  const productList = products?.data.content;

  if (!productList || productList.length === 0) {
    return null;
  }

  return (
    <div className={cx('slider-container')}>
      <Slider
        className={cx('container')}
        // slidesToShow={1}
        centerMode
        centerPadding="0px"
        speed={500}
        // autoplay
        // autoplaySpeed={3000}
        arrows={false}
      >
        {productList.map((product) => (
          <div key={product.id} className={cx('banner')}>
            <div
              style={{
                backgroundImage: `url(${product.imageUrl[0]})`,
              }}
              className={cx('banner-img')}
            >
              <div className={cx('banner-content')}>
                <div className={cx('badge-wrap')}>
                  <ProductStatusChip status={product.productStatus} />
                  <ProductCategoryTypeChip categoryType={product.productType} />
                </div>
                <div className={cx('title')}>{product.name}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductsBanner;
