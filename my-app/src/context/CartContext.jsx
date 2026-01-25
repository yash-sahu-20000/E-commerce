import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";
import { useAuth } from "./AuthContext";
import api from "../api/axios";
import toast from "react-hot-toast";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();

  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  const fetchCart = async () => {
    try {
      const res = await api.get("/cart");
      dispatch({ type: "SET_CART", payload: res.data.cart });
    } catch (error) {
      console.error("FETCH CART ERROR:", error);
      toast.error(
        error.response?.data?.message || "Failed to load cart"
      );
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    try {
      const res = await api.post("/cart", { productId, quantity });

      dispatch({ type: "SET_CART", payload: res.data.cart });

      toast.success(res.data?.message || "Item added to cart 🛒");
    } catch (error) {
      console.error("ADD TO CART ERROR:", error);
      toast.error(
        error.response?.data?.message || "Failed to add item"
      );
    }
  };

  const updateCartItem = async (productId, quantity) => {
    try {
      const res = await api.put("/cart", { productId, quantity });
      console.log(res)
      dispatch({ type: "SET_CART", payload: res.data.cart });

      toast.success(res.data?.message || "Cart updated");
    } catch (error) {
      console.error("UPDATE CART ERROR:", error);
      toast.error(
        error.response?.data?.message || "Failed to update cart"
      );
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const res = await api.delete(`/cart/${productId}`);

      dispatch({ type: "SET_CART", payload: res.data.cart });

      toast.success(res.data?.message || "Item removed from cart");
    } catch (error) {
      console.error("REMOVE FROM CART ERROR:", error);
      toast.error(
        error.response?.data?.message || "Failed to remove item"
      );
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchCart();
    } else {
      dispatch({ type: "CLEAR_CART" });
    }
  }, [isAuthenticated]);

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        fetchCart,
        addToCart,
        updateCartItem,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
