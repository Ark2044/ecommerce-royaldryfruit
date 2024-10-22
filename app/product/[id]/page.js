"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useProductContext } from "@/context/ProductContext";
import { useCartContext } from "@/context/CartContext";
import Image from "next/image";
import FlyingButton from "react-flying-item";

const ProductDetails = () => {
  const { id } = useParams(); // Get the dynamic id from URL
  const { products } = useProductContext();
  const { addToCart } = useCartContext(); // Import addToCart function from CartContext
  const [product, setProduct] = useState(null); // State to hold the product data

  useEffect(() => {
    if (id && products.length > 0) {
      // Find the product when the id is available
      const foundProduct = products.find((item) => item.id === id); // Assuming id is a string
      setProduct(foundProduct);
    }
  }, [id, products]);

  if (!product) return <p>Loading...</p>; // Display loading while product is fetched

  // Handle case where product is not found
  if (!product) {
    return (
      <p className="text-center text-red-500 font-semibold mt-10">
        Product not found
      </p>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, 1); // Add product to cart
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex-1 p-6">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={500}
            height={500}
            className="h-80 w-80 rounded-full transform transition-transform hover:scale-105"
          />
        </div>
        <div className="flex-1 p-6 md:ml-10">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            {product.name}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{product.description}</p>
          <div className="text-3xl font-bold text-red-600 mb-6">
            ₹{product.price.toFixed(2)}
          </div>

          <div className="flying-button-parent mt-4 text-center">
            <FlyingButton
              targetTop={"5%"}
              targetLeft={"95%"}
              src={product.imageUrl}
            >
              <button
                className="bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-8 rounded-full shadow-md hover:bg-gradient-to-l transition-all transform hover:scale-105 focus:outline-none"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </FlyingButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
