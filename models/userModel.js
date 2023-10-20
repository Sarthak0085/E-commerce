import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxLength: 30,
    },
    lasttName: {
        type: String,
        required: true,
        maxLength: 30,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "CUSTOMER",
    },
    mobile: {
        type: String,
    },
    address: [
        {
            type: ObjectId,
            ref: "address"
        }
    ],
    paymentInformation: [
        {
            type: ObjectId,
            ref: "payment"
        }
    ],
    ratings: [
        {
            type: ObjectId,
            ref: "rating"
        }
    ],
    reviews: [
        {
            type: ObjectId,
            ref: "review"
        }
    ],
}, {
    timestamps: true,
});

const User = mongoose.model("user", userSchema);

export default User;