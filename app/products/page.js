// pages/products.js
import React from "react";
import ProductList from "@/components/product/ProductsList";
import Link from "next/link";

const ProductsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl text-center font-bold mt-6 mb-4 text-gray-800">
        Our Products
      </h1>
      <p className="text-center text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
        Browse through our extensive selection of quality products. We have
        something for everyone!
      </p>

      <section className="bg-gray-50 p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-center text-gray-800">
          Shop Now
        </h2>
        <ProductList />
      </section>

      <footer className="text-center mt-8">
        <Link href="/" className="text-green-500 hover:text-green-700">
          &larr; Back to Home
        </Link>
      </footer>
    </div>
  );
};

export default ProductsPage;
