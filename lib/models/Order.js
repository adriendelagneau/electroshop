import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    stripeId: { type: String, required: true },
    userId: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    cart: { type: [Object], required: true },
    billingAddress: {type: [Object], required: true },
    totalAmount: { type: Number, required: true },
    payementStatus: { type: String, enum : ["waiting", "paid", "canceled"], default: "waiting" },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;