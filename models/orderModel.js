import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const orderSchema = new mongoose.Schema({
    user: {
        type: String,
        ref: "user",
    },
    orderItems: {
        type: ObjectId,
        ref: "orderItems",
    },
    orderDate: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    deliveryDate: {
        type: Date,
    },
    shippingAddress: {
        type: ObjectId,
        ref: "addressses",
    },
    paymentDetails: {
        paymentMethod: {
            type: String,
        },
        transactionId: {
            type: String,
        },
        paymentId: {
            type: String,
        },
        paymentStatus: {
            type: String,
        },
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    totalDiscountedPrice: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },
    orderStatus: {
        type: String,
        required: true,
        default: "PENDING",
    },
    orderItem: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
}, { timestamps: true });

const Order = mongoose.model("order", orderSchema);

export default Order;