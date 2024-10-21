// context/ProductContext.js
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const sampleProducts = [
  {
    id: "1",
    name: "Product 1",
    price: 10.0,
    description: "Description for Product 1",
    category: "Category A",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Product 2",
    price: 20.0,
    description: "Description for Product 2",
    category: "Category B",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    name: "Product 3",
    price: 15.5,
    description: "Description for Product 3",
    category: "Category A",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    name: "Product 4",
    price: 30.0,
    description: "Description for Product 4",
    category: "Category C",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "5",
    name: "Product 5",
    price: 25.5,
    description: "Description for Product 5",
    category: "Category A",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "6",
    name: "Product 6",
    price: 40.0,
    description: "Description for Product 6",
    category: "Category B",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "7",
    name: "Product 7",
    price: 35.0,
    description: "Description for Product 7",
    category: "Category C",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "8",
    name: "Product 8",
    price: 50.0,
    description: "Description for Product 8",
    category: "Category D",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "9",
    name: "Product 9",
    price: 45.0,
    description: "Description for Product 9",
    category: "Category A",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "10",
    name: "Product 10",
    price: 60.0,
    description: "Description for Product 10",
    category: "Category B",
    imageUrl: "https://via.placeholder.com/150",
  },
];

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
