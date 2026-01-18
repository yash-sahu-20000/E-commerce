export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, qty: 1 }];
      }

    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.payload);

    case "UPDATE_QTY":
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, qty: action.payload.qty }
          : item
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};
