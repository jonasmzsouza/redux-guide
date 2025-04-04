import CartActionTypes from "./action-type"

export const addProductToCart = (payload) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload: payload,
})

export const removeProductFromCart = (payload) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload: payload,
})

export const increaseProductQuantity = (payload) => ({
  type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
  payload: payload,
})

export const decreaseProductQuantity = (payload) => ({
  type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
  payload: payload,
})