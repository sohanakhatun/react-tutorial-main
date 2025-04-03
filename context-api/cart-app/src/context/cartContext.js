import { createContext, useContext } from "react";

export const CartContext = createContext({
  cartItem: [
    {
      id: 1,
      title: "",
      price: "",
      quantity: 1,
    },
  ],
  addToCart: (item) => {},
  removeFromCart: (id) => {},
  increaseQuantity: (id) => {},
  decreaseQuantity: (id) => {},
});

export const CartProvider = CartContext.Provider;
export default function useCart() {
  return useContext(CartContext);
}
