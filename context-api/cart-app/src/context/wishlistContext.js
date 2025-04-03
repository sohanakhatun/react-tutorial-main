import { createContext, useContext } from "react";

export const WishListContext = createContext({
  wishlistItem: [
    {
      id: 1,
      title: "",
      price: "",
      quantity: 1,
    },
  ],
  addToWishlist: (item) => {},
  removeFromWishlist: (id) => {},
  moveToCart: (item) => {}
});

export const WishlistProvider = WishListContext.Provider;
export default function useWishlist() {
  return useContext(WishListContext);
}
