const productModel = require("../models/product");
const multer = require('multer')
const cloudinary = require("cloudinary").v2;
const cloud = require('../config/cloudinary');
const fs = require('fs')
//Function for adding Product
const addProduct = async (req, res) => {
   try {
     const {name, description, price, category, subcategory, sizes, bestseller} = req.body;

     const imageUrls = [];
     
     const imageFields = ['image1', 'image2', 'image3', 'image4'];


     for(const field of imageFields){
        if(req.files[field]){
            const file = req.files[field][0];//file access
            const result = await cloudinary.uploader.upload(file.path, {
                folder: 'product_images',
            });
            imageUrls.push(result.secure_url);
            fs.unlinkSync(file.path); //remove temporary file
        }
     }
     console.log(name, description, price, category, subcategory, sizes, bestseller, imageUrls)

     if (!subcategory) {
        return res.status(400).json({ message: 'Subcategory is required.' });
      }
     const productData = {
        name, description, category, price:Number(price),
        subcategory, bestseller: bestseller === "true" ? true : false,
        sizes: JSON.parse(sizes),
        image: imageUrls,
        date: Date.now()
     }
     console.log(productData);
     console.log(req.files);
     console.log(imageUrls);
     const product = new productModel(productData)
     await product.save();
     res.status(201).json({success: true, messsage: "Product Added Successfully!!", product: product})
   } catch (error) {
     res.status(500).json({
        success: false, messsage: error.messsage
     })
     console.error(error);
   }
}

//Function for Listing Products
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({success:true, products})
    } catch (error) {
        res.json({
            success: false, messsage: error.messsage
         })
         throw error
    }
}

//Function for removing Product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message: "Product Removed Successfully!!"})
    } catch (error) {
        res.json({
            success: false, messsage: error.messsage
         })
         throw error
    }
}

//Function for single Product info
const singleProduct = async (req, res) => {
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId);
        res.json({success: true, product});

    } catch (error) {
        res.json({
            success: false, messsage: error.messsage
         })
         throw error
    }
}

module.exports = {
    addProduct, removeProduct, listProducts, singleProduct
}