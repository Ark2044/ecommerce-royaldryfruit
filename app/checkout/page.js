// pages/checkout.js
"use client";
import React, { useState } from "react";
import { useCartContext } from "@/context/CartContext";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { cart, clearCart } = useCartContext();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleCheckout = (e) => {
    e.preventDefault();

    // Here you would typically handle the order processing (e.g., API call)
    console.log("Order Details:", {
      name,
      email,
      address,
      phone,
      products: cart.products,
    });

    // Clear the cart after successful checkout
    clearCart();

    // Redirect to a thank you page or home
    router.push("/thank-you");
  };

  return (
    <div className="container mx-auto p-6 max-w-xl">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>
      {cart.products.length === 0 ? (
        <p className="mt-4 text-gray-600 text-lg">
          Your cart is empty. Please add products.
        </p>
      ) : (
        <form onSubmit={handleCheckout} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-200"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-200"
              required
            />
            <input
              type="text"
              placeholder="Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-200"
              required
            />
            <input
              type="text"
              placeholder="Your Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition duration-200"
              required
            />
          </div>
          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">Order Summary</h3>
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between mt-2 text-gray-700"
              >
                <span>
                  {product.name} (x{product.quantity})
                </span>
                <span>₹{(product.price * product.quantity).toFixed(2)}</span>
              </div>
            ))}
            <h3 className="mt-4 font-semibold">
              Total:{" "}
              <span className="text-green-600">
                ₹{cart.totalPrice.toFixed(2)}
              </span>
            </h3>
          </div>
          <button
            type="submit"
            className="mt-6 w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200"
          >
            Complete Purchase
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
