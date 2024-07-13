export const formatCurrency = (input) => {
  if (input === null || input === undefined) return "0.00";

  let [integer, decimal] = String(input).split(".");

  integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  decimal = decimal
    ? decimal.length >= 2
      ? decimal.substring(0, 2)
      : decimal + "0"
    : "00";

  return `${integer}.${decimal}`;
};
