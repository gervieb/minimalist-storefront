import { v4 as uuid } from "uuid";

export const currencyConverter = (prices, currentCurr) => {
  const res = prices.find((price) => price.currency === currentCurr);
  return res.amount;
};

export const checkAttributeType = (option, name) => {
  return option.some((el) => el.name === name && el.type === "swatch");
};

export const optionSelected = (obj, itemValue, attriName) => {
  return Object.entries(obj).some(
    ([key, value], i) => key === attriName && value === itemValue
  );
};

export const defaultOption = (prod) => {
  const keys = prod.attributes.map((el) => el.name);
  const attribute = prod.attributes.map((el) =>
    el.items.find((item, i) => i === 0)
  );
  return Object.fromEntries(
    keys.map((_, i) => [keys[i], attribute.map((attri) => attri.value)[i]])
  );
};

export const checkIfUnique = (selected, cart, id) => {
  const exist = cart.find((cartItem) => cartItem.productId === id);
  return (
    exist &&
    exist.items.find(
      (car) => JSON.stringify(car.variants) === JSON.stringify(selected)
    )
  );
};

export const handleAddToCart = (
  prod,
  vart,
  cartList,
  addItemToCart,
  increase
) => {
  let defaultVart = {};

  if (!vart) {
    defaultVart = defaultOption(prod);
  }

  const result = checkIfUnique(vart || defaultVart, cartList, prod.id);
  result
    ? increase(result.varId)
    : addItemToCart({
        productId: prod.id,
        items: [
          {
            variants: vart || defaultVart,
            varId: uuid(),
            qty: 1,
            product: prod,
          },
        ],
      });
};
