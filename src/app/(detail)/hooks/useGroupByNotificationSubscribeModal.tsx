import { useState } from 'react';

const useGroupByNotificationSubscribeModal = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [checkedPhone, setCheckedPhone] = useState(false);
  const [checkedEmail, setCheckedEmail] = useState(false);

  return {
    phoneNumber,
    setPhoneNumber,
    checkedPhone,
    setCheckedPhone,
    checkedEmail,
    setCheckedEmail,
  };
};

export default useGroupByNotificationSubscribeModal;
