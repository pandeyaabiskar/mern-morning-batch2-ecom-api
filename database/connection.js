const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect("mongodb+srv://root:root@cluster0.yh7eza7.mongodb.net/ecom?retryWrites=true&w=majority", () => {
    console.log("Database connected successfully");
  });
};

module.exports = connectDatabase
