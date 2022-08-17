const express = require("express");
const productRouter = require("./routes/products");
const cors = require("cors");
const productData = require("./data/products.json");
const hbs = require("hbs");
const connectDatabase = require('./database/connection');
const {logger, validateUser} = require('./middlewares/auth')

const app = express();

//Connect Database
connectDatabase();

//Setup Server
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(express.json());

//Setup Server Side Rendering
app.set("view engine", "hbs");
app.set("views", __dirname + "/templates");

//Setup HBS
hbs.registerPartials(__dirname + "/templates/partials");


// app.use("/", logger);

//Routes
app.get("/", [logger, validateUser], (req, res) => {
    console.log(req.greet)
  res.render("index", { productData });
});

app.get("/products/:productID", (req, res) => {
  const { productID } = req.params;
  const selectedProduct = productData.find(
    (product) => product.id === parseInt(productID)
  );
  res.render("details", selectedProduct);
});

//API Routes
app.use("/api/products", productRouter);

//Handle All Other Routes Not Matched Above
app.get("*", (req, res) => {
  res.status(404).send("No Page Found");
});

app.listen(5000, () => {
  console.log("Server started at port 5000");
});
