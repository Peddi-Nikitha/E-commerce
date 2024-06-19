// src/context-and-reducer/reducers.js
export const initialState = {
  total: 0,
  Products: []
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case 'add':
    case 'remove':
      return {
        ...state,
        Products: action.payload.Products,
        total: action.payload.total
      };
    default:
      throw new Error('Cannot match case in reducer');
  }
};

export default storeReducer;
