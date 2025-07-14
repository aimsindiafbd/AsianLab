import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Razorpay from "razorpay";
import crypto from 'crypto';
import sendOrderEmail from "../utils/sendOrderEmail.js";

// Razorpay instance
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// 🟢 Place order using COD
const payCash = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "cod",
      payment: false,
      date: Date.now()
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    const user = await userModel.findById(userId);

    // ✅ Send confirmation email
    await sendOrderEmail({
      to: user.email,
      name: address.firstName || user.name,
      items,
      amount
    });

    res.json({ success: true, message: "Order Placed" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to place order" });
  }
};

// 🟢 Place order and create Razorpay order
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: 'RazorPay',
      payment: false,
      status: "Order Placed",
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const options = {
      amount: amount * 100, // Convert to paisa
      currency: "INR",
      receipt: newOrder._id.toString(),
    };

    razorpayInstance.orders.create(options, async (error, order) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Razorpay order creation failed" });
      }

      newOrder.razorpay_order_id = order.id;
      await newOrder.save();

      res.json({ success: true, order });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🟢 Verify Razorpay payment
const verifyRazorpay = async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    console.log("🔵 Received Payment Verification Request:", req.body);

    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generated_signature !== razorpay_signature) {
      return res.status(400).json({ success: false, message: "Invalid Signature" });
    }

    console.log("✅ Payment verified successfully!");

    const order = await orderModel.findOne({ razorpay_order_id });

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    order.payment = true;
    order.payment_status = "Paid";
    order.payment_id = razorpay_payment_id;
    await order.save();

    const user = await userModel.findById(order.userId);

    await sendOrderEmail({
      to: user.email,
      name: order.address.firstName || user.name,
      items: order.items,
      amount: order.amount
    });

    console.log("✅ Order updated and confirmation email sent!");
    res.status(200).json({ success: true, message: "Payment verified and order updated!" });

  } catch (error) {
    console.error("❌ Error in verifyRazorpay:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// 🟢 Get all orders (Admin)
const allOrder = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🟢 Get orders of a user
const userOrder = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🟢 Update order status (Admin)
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  allOrder,
  userOrder,
  updateStatus,
  payCash,
  verifyRazorpay
};
