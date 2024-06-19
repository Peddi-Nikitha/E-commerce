// src/context-and-reducer/StoreContext.js
import React, { createContext, useReducer } from 'react';
import storeReducer, { initialState } from './reducers';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const addToBasket = (product) => {
    const updatedBasket = [...state.Products, product];
    const totalPrice = updatedBasket.reduce((total, prod) => total + prod.price, 0);

    dispatch({
      type: 'add',
      payload: { Products: updatedBasket, total: totalPrice },
    });
  };

  const removeFromBasket = (product) => {
    const updatedBasket = state.Products.filter((currentProduct) => currentProduct.name !== product.name);
    const totalPrice = updatedBasket.reduce((total, prod) => total + prod.price, 0);

    dispatch({
      type: 'remove',
      payload: { Products: updatedBasket, total: totalPrice },
    });
  };

  const value = {
    total: state.total,
    Products: state.Products,
    addToBasket,
    removeFromBasket,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};
