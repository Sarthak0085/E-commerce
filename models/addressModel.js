import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const addressSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxLength: 30,
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 30,
    },
    streetAddress: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pinCode: {
        type: Number,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    user: {
        type: ObjectId,
        ref: "User"
    }
}, {
    timestamps: true,
});

const Address = mongoose.model("addresses", addressSchema);

export default Address;