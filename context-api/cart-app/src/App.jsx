import "./App.css";
import { useEffect, useState } from "react";
import ProductCards from "./components/ProductCards";
import { CartProvider } from "./context/cartContext";
import Cart from "./components/Cart";
import { WishlistProvider } from "./context/wishlistContext";
import Wishlist from "./components/Wishlist";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (item) => {
    setCartItem((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = (id) => {
    setCartItem((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      setCartCount(updatedCart.length);
      return updatedCart;
    });
  };

  const increaseQuantity = (id) => {
    setCartItem((cartItem) =>
      cartItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItem((cartItem) =>
      cartItem
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // LocalStorage
  // Load cart items from localStorage on mount
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (storedCartItems.length > 0) {
      setCartItem(storedCartItems);
    }
  }, []);

  // Save cart items to localStorage whenever cartItem updates
  useEffect(() => {
    if (cartItem.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItem));
      setCartCount(cartItem.length);
    }
  }, [cartItem]);

  // Wishlist
  const [wishlistItem, setWishlistItem] = useState([]);
  const [wishlistItemCount, setWishlistItemCount] = useState(0);

  const addToWishlist = (item) => {
    const existingItem = wishlistItem.find(
      (wishlistItem) => wishlistItem.id === item.id
    );

    if (!existingItem) {
      setWishlistItem((prevWishlist) => [...prevWishlist, item]);
      setWishlistItemCount((prevCount) => prevCount + 1);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItem((prevWishlist) => {
      const wishlist = prevWishlist.filter((item) => item.id !== id);
      setWishlistItemCount(wishlist.length);
      return wishlist;
    });
  };

  const moveToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  useEffect(() => {
    const storedWislistedItems =
      JSON.parse(localStorage.getItem("wishListItems")) || [];
    if (storedWislistedItems.length > 0) {
      setWishlistItem(storedWislistedItems);
    }
  }, []);

  useEffect(() => {
    if (wishlistItem.length > 0) {
      localStorage.setItem("wishListItems", JSON.stringify(wishlistItem));
      setWishlistItemCount(wishlistItem.length);
    }
  }, [wishlistItem]);
  
  return (
    <>
      <WishlistProvider
        value={{ wishlistItem, addToWishlist, removeFromWishlist, moveToCart }}
      >
        <CartProvider
          value={{
            cartItem,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
          }}
        >
          <div className="flex flex-wrap gap-2">
            {products.map((product) => (
              <ProductCards
                key={product.id}
                product={product}
                addToWishlist={addToWishlist}
              />
            ))}
          </div>
          <div>
            <Cart
              cartItem={cartItem}
              cartCount={cartCount}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          </div>

          <div>
            <Wishlist
              wishlistItem={wishlistItem}
              removeFromWishlist={removeFromWishlist}
              wishlistItemCount={wishlistItemCount}
              moveToCart={moveToCart}
            />
          </div>
        </CartProvider>
      </WishlistProvider>
    </>
  );
}

export default App;
