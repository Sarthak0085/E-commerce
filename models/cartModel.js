import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const cartSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "user",
        required: true,
    },
    cartItems: [{
        type: ObjectId,
        ref: "cartItems",
        required: true,
    }],
    totalPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    totalItem: {
        type: Number,
        required: true,
        default: 0,
    },
    totalDiscountedPrice: {
        type: Number,
        required: true,
        default: 0,
    },
    totalDiscount: {
        type: Number,
        required: true,
        default: 0,
    },

}, { timestamps: true });

const Cart = mongoose.model("cart", cartSchema);

export default Cart;