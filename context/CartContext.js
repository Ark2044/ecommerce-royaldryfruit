// context/CartContext.js
"use client";
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ products: [], totalPrice: 0 });

  const addToCart = (product) => {
    const existingProduct = cart.products.find((p) => p.id === product.id);
    if (existingProduct) {
      setCart((prev) => ({
        ...prev,
        products: prev.products.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        ),
        totalPrice: prev.totalPrice + product.price,
      }));
    } else {
      setCart((prev) => ({
        ...prev,
        products: [...prev.products, { ...product, quantity: 1 }],
        totalPrice: prev.totalPrice + product.price,
      }));
    }
  };

  const removeFromCart = (productId) => {
    const updatedProducts = cart.products.filter((p) => p.id !== productId);
    const removedProduct = cart.products.find((p) => p.id === productId);
    setCart({
      products: updatedProducts,
      totalPrice: updatedProducts.reduce(
        (total, p) => total + p.price * p.quantity,
        0
      ),
    });
  };

  const updateQuantity = (productId, change) => {
    setCart((prevCart) => {
      const updatedProducts = prevCart.products
        .map((product) => {
          if (product.id === productId) {
            const newQuantity = product.quantity + change;
            if (newQuantity <= 0) {
              // If quantity is 0 or less, return null to remove the product
              return null;
            }
            return { ...product, quantity: newQuantity }; // Return updated product
          }
          return product; // Return unchanged product
        })
        .filter((product) => product !== null); // Filter out any null products

      const updatedTotalPrice = updatedProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );

      return {
        ...prevCart,
        products: updatedProducts,
        totalPrice: updatedTotalPrice,
      };
    });
  };

  const clearCart = () => {
    setCart({ products: [], totalPrice: 0 });
  };

  // Calculate total items in the cart
  const totalItems = cart.products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
