import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    stripeId: { type: String, required: true },
    userId: { type: String, required: true },
    cart: { type: [Object], required: true },
    billingAddress: {type: [Object], required: true },
    totalAmount: { type: Number, required: true },
    payementStatus: { type: String, enum : ["waiting", "paid", "canceled"], default: "waiting" },
    shippingStatus: {
      type: String,
      enum: ["preparing", "shipped", "delivered"],
      default: 'preparing',
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;