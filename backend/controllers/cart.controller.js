import User from "../models/User.js";

const getUserWithPopulatedCart = (userId) =>
  User.findById(userId).populate("cart.product");

export const getCart = async (req, res) => {
  try {
    const user = await getUserWithPopulatedCart(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      cart: user.cart,
    });
  } catch (error) {
    console.error("GET CART ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch cart",
    });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const itemIndex = user.cart.findIndex(
      (item) => item.product.toString() === productId
    );

    if (itemIndex > -1) {
      user.cart[itemIndex].quantity += Number(quantity);
    } else {
      user.cart.push({ product: productId, quantity: Number(quantity) });
    }

    await user.save();

    const userPopulated = await getUserWithPopulatedCart(req.user.id);

    return res.status(200).json({
      success: true,
      message: "Item added to cart",
      cart: userPopulated.cart,
    });
  } catch (error) {
    console.error("ADD TO CART ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to add item to cart",
    });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const item = user.cart.find(
      (item) => item.product.toString() === productId
    );

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found in cart",
      });
    }

    item.quantity = Number(quantity);
    await user.save();

    const userPopulated = await getUserWithPopulatedCart(req.user.id);

    return res.status(200).json({
      success: true,
      message: "Cart updated",
      cart: userPopulated.cart, 
    });
  } catch (error) {
    console.error("UPDATE CART ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update cart item",
    });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const { productId } = req.params;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.cart = user.cart.filter(
      (item) => item.product.toString() !== productId
    );

    await user.save();

    const userPopulated = await getUserWithPopulatedCart(req.user.id);

    return res.status(200).json({
      success: true,
      message: "Item removed from cart",
      cart: userPopulated.cart,
    });
  } catch (error) {
    console.error("REMOVE FROM CART ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to remove item from cart",
    });
  }
};
export const clearCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.cart = [];

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Cart cleared successfully",
      cart: [], 
    });
  } catch (error) {
    console.error("CLEAR CART ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to clear cart",
    });
  }
};