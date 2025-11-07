import React, { createContext, useContext } from 'react';

// Simple no-op cart context stub to keep imports safe when cart is disabled.
const CartContext = createContext(null);

export function CartProvider({ children }) {
  const noop = () => {};
  const value = {
    items: [],
    externalItems: [],
    total: 0,
    addItem: noop,
    removeItem: noop,
    updateQuantity: noop,
    clearCart: noop,
    addExternalItem: noop,
    removeExternalItem: noop,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    // Return a safe fallback instead of throwing so UI can render without provider.
    return {
      items: [],
      externalItems: [],
      total: 0,
      addItem: () => {},
      removeItem: () => {},
      updateQuantity: () => {},
      clearCart: () => {},
      addExternalItem: () => {},
      removeExternalItem: () => {},
    };
  }
  return ctx;
}