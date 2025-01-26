import mongoose from "mongoose";

const dimensions = new mongoose.Schema({
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  depth: {
    type: Number,
  }
})

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  category: {
    type: String
  },
  price: {
    type: Number
  },
  discountPercentage: {
    type: Number
  },
  rating: {
    type: Number
  },
  tags: {
    type: [String]
  },
  brand: {
    type: String
  },
  sku: {
    type: String
  },
  dimensions,
  images: [String],
  thumbnail: {
    type: String
  }
})

export const productModel = mongoose.model("products", productSchema)