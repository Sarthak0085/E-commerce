import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const orderItemSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "products",
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountedPrice: {
        type: Number,
        required: true,
    },
    userId: {
        type: ObjectId,
        ref: "user",
        required: true,
    },
}, { timestamps: true, });

const OrderItem = mongoose.model("orderItems", orderItemSchema);

export default OrderItem;