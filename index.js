const express = require('express');
const productRouter = require('./routes/products');

const app = express();

app.get("/", (req, res) =>{
    res.send("Welcome to Ecommerce APIs")
})

app.use("/api/products", productRouter)

app.get("*", (req, res) => {
    res.status(404).send("No Page Found")
})

app.listen(5000, () => {
    console.log("Server started at port 5000")
})