import React from "react";
import { useCartContext } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import Trash from "../icons/Trash";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartContext();
  const router = useRouter();

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
    <div className="p-6 max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Your Cart
      </h2>
      {cart.products.length === 0 ? (
        <p className="mt-4 text-gray-600 text-lg text-center">
          Your cart is empty.
        </p>
      ) : (
        <div>
          <div className="flex flex-col space-y-4">
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md transition transform hover:shadow-lg hover:scale-105"
              >
                <div className="flex-shrink-0">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={128}
                    height={128}
                    className="h-24 w-24 rounded-full border border-gray-200 shadow-sm cursor-pointer"
                    onClick={() => router.push(`/product/${product.id}`)}
                  />
                </div>
                <div className="flex-1 px-4">
                  <h4 className="text-2xl font-semibold text-gray-800">
                    {product.name}
                  </h4>
                  <p className="text-gray-700">
                    Price:{" "}
                    <span className="font-bold">
                      ₹{product.price.toFixed(2)}
                    </span>
                  </p>
                  <p className="text-gray-700">Quantity: {product.quantity}</p>
                </div>
                <div className="flex items-center gap-2">
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
                    <Trash />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <h3 className="text-2xl font-semibold text-gray-800">
              Total:{" "}
              <span className="font-bold text-green-600">
                ₹{cart.totalPrice.toFixed(2)}
              </span>
            </h3>
          </div>
          <div className="mt-4 flex justify-between">
            <Link
              href="/checkout"
              className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200 shadow-md hover:shadow-lg"
            >
              Proceed to Checkout
            </Link>
            <button
              onClick={handleClearCart}
              className={`px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 shadow-md hover:shadow-lg ${
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
