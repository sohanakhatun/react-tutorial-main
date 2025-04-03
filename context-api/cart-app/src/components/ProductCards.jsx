import React from "react";
import useCart from "../context/cartContext";
import useWishlist from "../context/wishlistContext";

const ProductCards = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const addToCartHandler = () => {
    addToCart(product);
    alert("Product Added to cart!")
  };

  const addToWishlistHandler = () => {
    addToWishlist(product);
    alert("Product Added to Wishlist!")
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-64">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain"
      />
      <h3 className="text-lg font-semibold mt-2 truncate">{product.title}</h3>
      <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
      <button
        onClick={addToCartHandler}
        className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add to Cart
      </button>
      <button
        onClick={addToWishlistHandler}
        className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default ProductCards;
