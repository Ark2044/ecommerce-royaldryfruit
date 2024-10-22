import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link
import { useProductContext } from "@/context/ProductContext";
import { useCartContext } from "@/context/CartContext";
import FlyingButton from "react-flying-item";

const ProductList = () => {
  const { products } = useProductContext();
  const { addToCart } = useCartContext();

  const handleAddToCart = (product) => {
    addToCart(product, 1);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-gray-200 p-4 rounded-lg flex flex-col justify-between group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all"
        >
          <Link href={`/product/${product.id}`}>
            <div className="mx-auto cursor-pointer">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
                className="h-48 w-48 block mx-auto rounded-full"
              />
            </div>
          </Link>

          <div className="text-center">
            <h4 className="font-semibold text-xl my-3">
              {product.name.toUpperCase()}
            </h4>

            <p className="text-gray-500 text-sm line-clamp-3">
              {product.description}
            </p>
          </div>

          <div className="flying-button-parent mt-4 text-center w-full bg-red-500 text-white py-2 rounded-full text-lg font-medium hover:bg-red-600 transition-colors duration-200">
            <FlyingButton
              targetTop={"5%"}
              targetLeft={"95%"}
              src={product.imageUrl}
            >
              <div onClick={() => handleAddToCart(product)}>
                Add to cart ₹{product.price.toFixed(2)}
              </div>
            </FlyingButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
