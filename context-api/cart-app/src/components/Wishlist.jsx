import React from "react";

const Wishlist = ({ wishlistItem, removeFromWishlist, wishlistItemCount , moveToCart }) => {
  return (
    <div className="p-6 bg-gray-100 min-h-fit flex flex-col gap-7">
    <div>
    <h1 className="text-2xl font-semibold mb-4">My Wishlist</h1>
    <p className="text-lg font-medium mb-4">Wishlist Count: {wishlistItemCount}</p>
    </div>
     <div className="flex flex-col gap-9">
     {wishlistItem.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-lg p-4 flex items-center gap-4 border">
          <img
            src={item.image}
            alt={item.title}
            className="w-16 h-16 object-cover rounded-md"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => moveToCart(item)}
              className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Move to Cart
            </button>

            <button
              onClick={() => removeFromWishlist(item.id)}
              className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default Wishlist;
