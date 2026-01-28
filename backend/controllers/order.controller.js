import Order from "../models/Order.js";

export const getOrders = async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
};


export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate("items.product") 
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message,
    });
  }
};

export const createOrder = async (req, res) => {
  try {
    const { items, total, payment, name, phone, address, city, state, zip } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, message: "No items in order" });
    }

    const fullAddress = `${name}, ${address}, ${city}, ${state} - ${zip}. Phone: ${phone}`;

    const orderItems = items.map((item) => ({
      product: item.product._id,
      title: item.product.title,
      price: item.product.price,
      quantity: item.quantity,
    }));

    const newOrder = new Order({
      user: req.user._id,
      items: orderItems,
      totalAmount: total,
      paymentMethod: payment,
      shippingAddress: fullAddress,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: savedOrder,
    });
  } catch (error) {
    console.error("Order Creation Error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Internal Server Error", 
      error: error.message 
    });
  }
};
export const updateOrderStatus = async (req, res) => {
  const { status } = req.body;

  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );

  res.json(order);
};
