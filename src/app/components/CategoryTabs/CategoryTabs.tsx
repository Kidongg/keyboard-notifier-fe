'use client';
import React, { useState } from 'react';

import classNames from 'classnames/bind';

import styles from './CategoryTabs.module.scss';

const cx = classNames.bind(styles);

type cagegoryOption = {
  label: string;
  selected: boolean;
};

// API 연동 전 임시 데이터
const cagegoryOptions: cagegoryOption[] = [
  { label: '전체', selected: true },
  { label: '키트', selected: false },
  { label: '키보드', selected: false },
  { label: '스위치', selected: false },
  { label: '키캡', selected: false },
  { label: '스테빌라이저', selected: false },
];

const CategoryTabs = () => {
  const [options, setOptions] = useState(cagegoryOptions);

  const handleSelect = (index: number) => {
    const newOptions = options.map((option, i) => ({
      ...option,
      selected: i === index,
    }));
    setOptions(newOptions);
  };

  return (
    <div className={cx('container')}>
      <div className={cx('category-tabs')}>
        {options.map((option, index) => (
          <div
            key={option.label}
            className={cx('tab', {
              selected: option.selected,
            })}
            onClick={() => handleSelect(index)}
          >
            <span>{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
