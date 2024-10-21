// components/product/ProductsList.js
"use client";
import React from "react";
import Image from "next/image"; // Import Image component
import { useProductContext } from "@/context/ProductContext";
import { useCartContext } from "@/context/CartContext";

const ProductList = () => {
  const { products } = useProductContext();
  const { addToCart } = useCartContext();

  const handleAddToCart = (product) => {
    addToCart(product, 1); // Example: add one item
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          <div className="p-6 flex flex-col justify-between">
            <Image
              src={product.imageUrl} // The product image URL
              alt={product.name} // Accessibility text
              width={150} // Define width
              height={150} // Define height
              className="mb-4 rounded" // Additional styling
            />
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {product.name}
            </h4>
            <p className="text-gray-600 mb-4">
              Price:{" "}
              <span className="font-bold">${product.price.toFixed(2)}</span>
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md transition duration-200 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
