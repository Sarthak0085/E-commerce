import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 50,
    },
    parentCategory: {
        type: ObjectId,
        ref: "categories",
    },
    level: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const Category = mongoose.model("categories", categorySchema);

export default Category;