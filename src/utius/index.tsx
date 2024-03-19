export function numberToBRL(number: number) {
  return number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function restaurantIsOpen() {
  const date = new Date();
  const hours = date.getHours();
  return hours >= 9 && hours < 22;
}
