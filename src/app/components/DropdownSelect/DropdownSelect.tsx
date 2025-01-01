'use client';

import { useState } from 'react';

import classNames from 'classnames/bind';

import styles from './DropdownSelect.module.scss';

const cx = classNames.bind(styles);

type DropdownOption = {
  type: string;
  label: string;
};

type OptionsProps<T> = {
  selectedOption: T;
  options: T[];
  onClick: (option: T) => void;
};

const DropdownSelect = <T extends DropdownOption>({ selectedOption, options, onClick }: OptionsProps<T>) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  // 버튼 클릭 시 드롭다운으로 팝오버 표시
  const handleOnClickDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  // 드롭다운 메뉴 아이템 클릭 시 텍스트 색상 변경
  const handleOnClickItem = (option: T) => {
    setIsOpenDropdown(false);
    onClick(option);
  };

  return (
    <div className={cx('container')}>
      <div className={cx('button', { is_open_dropdown: isOpenDropdown })} onClick={handleOnClickDropdown}>
        <span className={cx('button_text')}>{selectedOption?.label}</span>
        <img
          src={isOpenDropdown ? '/assets/icons/accordian_fo.png' : '/assets/icons/accordian_en.png'}
          alt={isOpenDropdown ? 'accordian_fo' : 'accordian_en'}
          width="24px"
          height="24px"
        />
      </div>
      <ul className={cx('dropdown', { show: isOpenDropdown, hide: !isOpenDropdown })}>
        {options.map((option, index) => (
          <li
            className={cx('dropdown_item', { dropdown_item_is_clicked: option.type === selectedOption.type })}
            onClick={() => handleOnClickItem(option)}
            key={index}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownSelect;
