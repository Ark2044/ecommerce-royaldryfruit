// models/Cart.js
export const Cart = {
  id: String, // Unique identifier for the cart
  userId: String, // Identifier for the user (if you have user authentication)
  products: [
    // Array of product objects or references
    {
      productId: String, // Product ID
      quantity: Number, // Quantity of the product
    },
  ],
  totalPrice: Number, // Total price of the cart (calculated)
};
