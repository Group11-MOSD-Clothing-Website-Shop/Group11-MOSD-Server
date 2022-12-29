const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    images: {
      type: Array,
    },
    categories: {
      type: Array,
      required: true,
    },
    size: {
      type: Array,
    },
    color: {
      type: Array,
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

const mongoose = require("mongoose");

const productSchema2 = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    size: {
      type: Array,
    },
    color: {
      type: Array,
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
