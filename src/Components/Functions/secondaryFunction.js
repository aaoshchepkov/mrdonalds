
export const totalPriceItems = order => order.price * order.count;
export const formatCurrency = (item) => {
  const items = item.toLocaleString('ru-RU',{style:'currency', currency:'RUB'});
  return items;
}