import React from "react";
import { useCartContext } from "@/context/CartContext";
import Link from "next/link";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartContext();

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleIncrease = (productId) => {
    updateQuantity(productId, 1); // Increase quantity by 1
  };

  const handleDecrease = (productId) => {
    updateQuantity(productId, -1); // Decrease quantity by 1
  };

  const handleClearCart = () => {
    clearCart(); // Function that clears the cart
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      {cart.products.length === 0 ? (
        <p className="mt-4 text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div>
          <div className="flex flex-col">
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center mt-4 bg-white p-4 rounded-lg shadow-md transition hover:shadow-lg"
              >
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">
                    {product.name}
                  </h4>
                  <p className="text-gray-600">
                    Price: ${product.price.toFixed(2)}
                  </p>
                  <p className="text-gray-600">Quantity: {product.quantity}</p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleDecrease(product.id)}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-200"
                    disabled={product.quantity <= 1} // Disable if quantity is 1
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleIncrease(product.id)}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-200"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="ml-4 text-red-600 hover:text-red-800 transition duration-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <h3 className="text-2xl font-semibold text-gray-800">
              Total:{" "}
              <span className="font-bold">${cart.totalPrice.toFixed(2)}</span>
            </h3>
          </div>
          <div className="mt-4 flex justify-between">
            <Link
              href="/checkout"
              className="inline-block px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={handleClearCart}
              className={`px-6 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 ${
                cart.products.length === 0
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={cart.products.length === 0} // Disable when cart is empty
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
