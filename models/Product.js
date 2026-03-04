import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    rating: Number,
    comment: String
});

const variantSchema = new mongoose.Schema({
    sku: String,
    color: String,
    price: Number,
    stock: Number
});

const productSchema = new mongoose.Schema({
    name: String,
    category: String,
    variants: [variantSchema],
    reviews: [reviewSchema],
    avgRating: Number
});

productSchema.index({ category: 1 });
productSchema.index({ "variants.sku": 1 });

export default mongoose.model("Product", productSchema);