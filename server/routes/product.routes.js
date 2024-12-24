const express = require('express')
const {addProduct, removeProduct, listProducts, singleProduct} = require('../controllers/productController.js');
const productRouter = express.Router();
productRouter.post('/add',addProduct);
productRouter.post('/remove',removeProduct);
productRouter.post('/single',singleProduct);
productRouter.get('/list',listProducts);

module.exports = productRouter