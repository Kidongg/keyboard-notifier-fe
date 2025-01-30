import { RefObject, useState } from 'react';

const useGroupByNotificationSubscribeModal = (emailInputRef: RefObject<HTMLInputElement>) => {
  const [checkedEmail, setCheckedEmail] = useState(false);

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
    checkedEmail,
    setCheckedEmail,
    onClickDisabledEmailCheckbox,
    onClickEnabledEmailCheckbox,
  };
};

export default useGroupByNotificationSubscribeModal;
