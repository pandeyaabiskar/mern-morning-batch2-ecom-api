const mongoose = require('mongoose');

const ratingSchema = mongoose.Schema({
    rate: Number,
    count: Number
})

const productSchema = mongoose.Schema({
    title: {
        type : String,
        required: true,
        unique: true,
        maxlength : [20, "Sorry bro, too long!"],
        minlength: 10,
    },
    price: {
        type: Number,
        min: 1,
        max: 1000
    },
    description: String,
    category: String,
    image: String,
    rating: ratingSchema
})

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;