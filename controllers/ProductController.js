// const productData = require("../data/products.json");
const ProductModel = require("../models/Product");

const returnAllProducts = async (req, res) => {
  const { category, price } = req.query;

  const productData = await ProductModel.find();

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
  res.json(productData);
};

const returnSingleProduct = async (req, res) => {
  const { productID } = req.params;

  const productData = await ProductModel.find({ _id: productID });
  res.json(productData);
};

//Creating a product
const createProduct = async (req, res) => {
  try {
    // const product = new ProductModel(req.body);
    // await product.save();
    // res.send(product);

    //2nd process
    const result = await ProductModel.create(req.body);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

const replaceProduct = async (req, res) => {
  const { productID } = req.params;
  try {
    const result = await ProductModel.findOneAndReplace({_id : productID}, req.body, {returnDocument : "after"});
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

const updateProduct = async (req, res) => {
  const { productID } = req.params;
  try {
    const result = await ProductModel.findByIdAndUpdate(productID, req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};
const deleteProduct = async (req, res) => {
  const { productID } = req.params;
  try {
    const result = await ProductModel.findByIdAndDelete(productID, req.body);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  returnAllProducts,
  returnSingleProduct,
  createProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
