'use client';

import { useState } from 'react';

import classNames from 'classnames/bind';

import styles from './DropdownSelect.module.scss';

const cx = classNames.bind(styles);

export type DropdownOption = {
  type: string;
  value: string;
};

type OptionsProps = {
  options: DropdownOption[];
  defaultOption?: DropdownOption;
  onClick: (option: DropdownOption) => void;
};

const DropdownSelect = ({ options, defaultOption, onClick }: OptionsProps) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption>(defaultOption || options[0]);

  // 버튼 클릭 시 드롭다운으로 팝오버 표시
  const handleOnClickDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  // 드롭다운 메뉴 아이템 클릭 시 텍스트 색상 변경
  const handleOnClickItem = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpenDropdown(false);
    onClick(option);
  };

  return (
    <div className={cx('container')}>
      <div className={cx('button', { is_open_dropdown: isOpenDropdown })} onClick={handleOnClickDropdown}>
        <span className={cx('button_text')}>{selectedOption.value}</span>
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
            {option.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownSelect;
