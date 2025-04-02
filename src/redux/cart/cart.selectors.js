import rootReducer from "../root-reducer";

export const selectProductsCount = (rootReducer) => {
  const { products } = rootReducer.cartReducer;
  return products.reduce((acc, curr) => acc + curr.quantity, 0);
}

export const selectProductsTotalPrice = (rootReducer) => {
  const { products } = rootReducer.cartReducer;
  return products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
}