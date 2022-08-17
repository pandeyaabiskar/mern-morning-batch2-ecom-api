const express = require("express");
const router = express.Router();
const {
  returnAllProducts,
  returnSingleProduct,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController");

router.get("/", returnAllProducts);
router.get("/:productID", returnSingleProduct);

router.post("/", createProduct);
router.put("/:productID", replaceProduct);
router.patch("/:productID", updateProduct);
router.delete("/:productID", deleteProduct);

module.exports = router;
