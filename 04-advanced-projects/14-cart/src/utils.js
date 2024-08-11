export const getTotal = (cart) => {
  let totalNumber = 0;
  let totalMoney = 0;

  for (let value of cart.values()) {
    totalNumber += value.amount;
    totalMoney += value.amount * value.price;
  }

  return { totalNumber, totalMoney };
}