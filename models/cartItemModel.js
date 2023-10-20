import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const cartItemSchema = new mongoose.Schema({
    cart: {
        type: ObjectId,
        ref: "cart",
        required: true,
    },
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
        default: 1,
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
}, { timestamps: true });

const CartItem = mongoose.model("cartItem", cartItemSchema);

export default CartItem;