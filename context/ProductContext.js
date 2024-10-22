// context/ProductContext.js
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { sampleProducts } from "@/data/product";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(sampleProducts);
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [loading, setLoading] = useState(true);

  // Simulate fetching products from an API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setProducts(sampleProducts);
      setFilteredProducts(sampleProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []); // No dependencies needed

  // Function to filter products by category
  const filterProducts = (category) => {
    const updatedProducts = products.filter(
      (product) => product.category === category
    );
    setFilteredProducts(updatedProducts);
  };

  // Function to reset filters
  const resetFilters = () => {
    setFilteredProducts(products);
  };

  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts,
        setProducts,
        loading,
        filterProducts,
        resetFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Ensure this function is defined and exported correctly
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
