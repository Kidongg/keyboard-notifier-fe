export const formatPrice = (price: number, unit: string) => {
  return `${price.toLocaleString('ko-KR')} ${unit}`;
};
