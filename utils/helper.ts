export const formatMoney = (price: number) => {
  return new Intl.NumberFormat('en-US', {}).format(price);
};

export const rounding = (number: number) => {
  return ~~number;
};
