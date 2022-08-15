const mongoose = require('mongoose');

const ratingSchema = mongoose.Schema({
    rate: Number,
    count: Number
})

const productSchema = mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: ratingSchema
})

const ProductModel = mongoose.Model("product", productSchema);

module.exports = ProductModel;