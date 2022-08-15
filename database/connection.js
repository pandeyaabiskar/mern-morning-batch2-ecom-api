const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(
    "mongodb+srv://root:root@cluster0.3cnv3.mongodb.net/morning2-ecom?retryWrites=true&w=majority",
    () => {
      console.log("Database connected successfully");
    }
  );
};

module.exports = connectDatabase;
