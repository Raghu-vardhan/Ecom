import React, { createContext, useState, useEffect, useContext } from 'react';

// Create CartContext
const CartContext = createContext();

// CartProvider Component
export const CartProvider = ({ children }) => {
  // Load cart from localStorage or default to empty array if not found
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

    // Add to cart function
    const addToCart = (product) => {
        setCart((prevCart) => {
        const productInCart = prevCart.find((item) => item.id === product.id);

        let updatedCart;
        if (productInCart) {
            updatedCart = prevCart.map((item) =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
        } else {
            updatedCart = [...prevCart, { ...product, quantity: 1 }];
        }

        return updatedCart;
        });
    };

  // Remove from cart function
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== productId);
      return updatedCart;
    });
  };

  // Clear the cart function
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for easier usage of the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
