import React, { useState } from "react";
import { useContext } from "react";
import { Cart } from "../domain/cart";

const StoreContext = React.createContext<any>({});

// eslint-disable-next-line react-hooks/rules-of-hooks
export const utilizeStore = () => useContext(StoreContext);

export const Provider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Cart>([]);

  const value = {
    cart,
    updateCart: setCart,
    emptyCart: () => setCart([]),
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
