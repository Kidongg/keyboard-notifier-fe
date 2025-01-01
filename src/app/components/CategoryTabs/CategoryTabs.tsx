'use client';
import React from 'react';

import classNames from 'classnames/bind';

import { ProductCategoryOptionsType } from '@/app/(shared)/constants';

import styles from './CategoryTabs.module.scss';

const cx = classNames.bind(styles);

type CategoryTabsProps = {
  selectedOption: ProductCategoryOptionsType;
  options: ProductCategoryOptionsType[];
  onClick: (category: ProductCategoryOptionsType) => void;
};

const CategoryTabs = ({ selectedOption, options, onClick }: CategoryTabsProps) => {
  return (
    <div className={cx('container')}>
      <ul className={cx('category-tabs')}>
        {options.map((option) => (
          <li
            key={option.type + option.label}
            className={cx('tab', {
              selected: selectedOption.type === option.type,
            })}
            onClick={() => onClick(option)}
          >
            <span>{option.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryTabs;
