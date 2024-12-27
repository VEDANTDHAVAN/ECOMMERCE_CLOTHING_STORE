const express = require('express')
const {addProduct, removeProduct, listProducts, singleProduct} = require('../controllers/productController.js');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const config = require('../controllers/config')
cloudinary.config({
    cloud_name: config.CLOUDINARY_NAME,
    api_key: config.CLOUDINARY_API_KEY,
    api_secret: config.CLOUDINARY_SECRET_KEY,
 });
const fs = require('fs');
const upload = multer({
    dest: 'uploads/',
    storage: multer.diskStorage({}),
    limits: {fileSize: 5*1024*1024},
}).fields([
    { name: 'image1', maxCount:1},
    { name: 'image2', maxCount:1},
    { name: 'image3', maxCount:1},
    { name: 'image4', maxCount:1},
]);
const adminAuth = require('../middleware/adminAuth.js');
const productRouter = express.Router();

productRouter.post('/add',upload,addProduct);
productRouter.post('/remove',removeProduct);
productRouter.post('/single',singleProduct);
productRouter.get('/list',listProducts);

module.exports = productRouter