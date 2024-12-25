const productModel = require("../models/product");

const cloudinary = require("cloudinary").v2;

//Function for adding Product
const addProduct = async (req, res) => {
   try {
     const {name, description, price, category, subcategory, sizes, bestseller} = req.body;

     const image1 = req.files.image1 && req.files.image1[0];
     const image2 = req.files.image2 && req.files.image2[0];
     const image3 = req.files.image3 && req.files.image3[0];
     const image4 = req.files.image4 && req.files.image4[0];

     const images = [image1, image2, image3, image4].filter((item)=> item !== undefined);
     
     let imageUrl = await Promise.all(
        images.map(async (item)=> {
          let result = await cloudinary.uploader.upload(item.path, {resource_type:'image'});
          return result.secure_url;
        })
     )
     console.log(name, description, price, category, subcategory, sizes, bestseller)
     console.log(imageUrl);

     const productData = {
        name, description, category, price:Number(price),
        subcategory, bestseller: bestseller === "true" ? true : false,
        sizes: JSON.parse(sizes),
        image: imageUrl,
        date: Date.now()
     }
     console.log(productData);
     const product = new productModel(productData)
     await product.save();
     res.json({success: true, messsage: "Product Added Successfully!!"})
   } catch (error) {
     res.json({
        success: false, messsage: error.messsage
     })
     throw error
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