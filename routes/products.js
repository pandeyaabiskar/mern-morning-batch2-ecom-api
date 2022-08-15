const express = require("express");
const router = express.Router();
const {returnAllProducts, returnSingleProduct} = require('../controllers/ProductController')

router.get("/", returnAllProducts);
router.get("/:productID", returnSingleProduct);

module.exports = router;
