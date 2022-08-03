const express = require("express");
const productData = require("../data/products.json");
const router = express.Router();

router.get("/", (req, res) => {
  const { category, price } = req.query;

  if (category && price) {
    const filteredData = productData.filter(
      (product) => product.price >= price && product.category === category
    );
    res.json(filteredData);
    return;
  }
  if (category) {
    const filteredData = productData.filter(
      (product) => product.category === category
    );
    res.json(filteredData);
    return;
  }
  if (price) {
    const filteredData = productData.filter(
      (product) => product.price >= price
    );
    res.json(filteredData);
    return;
  }
  res.json(productData)
});

router.get("/:productID", (req, res) => {
  const { productID } = req.params;
  if (productID <= productData.length) {
    res.json(productData[productID - 1]);
  } else {
    res.send("No such index exists");
  }
});

module.exports = router;
