import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  clearCart,
} from "./features/cart/cartSlice";

const sampleItems = [
  { id: 1, name: "Pen" },
  { id: 2, name: "Notebook" },
  { id: 3, name: "Bag" },
];

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🛒 Redux Persist Cart</h1>

      <h2>Products</h2>
      {sampleItems.map((item) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => dispatch(addToCart(item))}>Add</button>
        </div>
      ))}

      <h2>Cart</h2>
      {cartItems.length === 0 && <p>Cart is empty</p>}
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
      )}
    </div>
  );
}

export default App;
