import { RefObject, useState } from 'react';

const useGroupByNotificationSubscribeModal = (
  phoneInputRef: RefObject<HTMLInputElement>,
  emailInputRef: RefObject<HTMLInputElement>,
) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checkedPhone, setCheckedPhone] = useState(false);
  const [checkedEmail, setCheckedEmail] = useState(false);

  const onClickDisabledPhoneCheckbox = () => {
    setCheckedPhone(true);
    phoneInputRef.current?.focus();
  };

  const onClickEnabledPhoneCheckbox = () => {
    setCheckedPhone(false);
    if (phoneInputRef.current) {
      setPhoneNumber('');
      phoneInputRef.current.value = '';
    }
  };

  const onClickDisabledEmailCheckbox = () => {
    setCheckedEmail(true);
    emailInputRef.current?.focus();
  };

  const onClickEnabledEmailCheckbox = () => {
    setCheckedEmail(false);
    if (emailInputRef.current) {
      emailInputRef.current.value = '';
    }
  };

  return {
    phoneNumber,
    setPhoneNumber,
    checkedPhone,
    setCheckedPhone,
    checkedEmail,
    setCheckedEmail,
    onClickDisabledPhoneCheckbox,
    onClickEnabledPhoneCheckbox,
    onClickDisabledEmailCheckbox,
    onClickEnabledEmailCheckbox,
  };
};

export default useGroupByNotificationSubscribeModal;
