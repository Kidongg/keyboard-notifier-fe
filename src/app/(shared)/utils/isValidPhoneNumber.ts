export const isValidPhoneNumber = (phone: string) => {
  const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
  return phoneRegex.test(phone);
};
