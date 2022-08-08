const express = require('express');
const productRouter = require('./routes/products');
const cors = require('cors');
const productData = require('./data/products.json')

const app = express();

//Setup Server
app.use( cors() );
app.use(express.static(__dirname + '/public'))

//Setup Server Side Rendering
app.set('view engine', 'hbs');

app.get("/", (req, res) =>{
    res.render('index', {productData});
})

// app.get('/css/index.css', (req, res) => {
//     res.sendFile(__dirname + '/public/css/index.css');
// })

app.use("/api/products", productRouter)

app.get("*", (req, res) => {
    res.status(404).send("No Page Found")
})

app.listen(5000, () => {
    console.log("Server started at port 5000")
})