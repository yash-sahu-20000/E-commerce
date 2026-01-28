import Order from "../models/Order.js";


export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email") 
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      response: orders,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("user", "name email")
      .populate("items.product");

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.status(200).json({
      success: true,
      response: order, 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId })
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
    const { items, total, payment, name, phone, address, city, state, zip, userid } = req.body;

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
      user: userid,
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
