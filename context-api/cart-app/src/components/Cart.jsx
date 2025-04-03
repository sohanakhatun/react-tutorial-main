import React from "react";

const Cart = ({ cartItem, cartCount, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="p-6 bg-gray-100 min-h-fit">
      <h2 className="text-2xl font-semibold mb-4">🛒 Your Cart</h2>

      {cartItem.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty. Start shopping! 🛍️</p>
      ) : (
        <>
          <p className="text-lg font-medium mb-4">Total Items: {cartCount}</p>

          <div className="space-y-4">
            {cartItem.map((item) => (
              <div key={item.id} className="flex items-center bg-white shadow-md p-4 rounded-lg">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded" />
                
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      ➖
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      ➕
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-auto text-red-500 hover:text-red-700"
                >
                  ❌ Remove
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
