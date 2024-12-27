const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const config = require('../controllers/config')
const express = require('express');
const fs = require('fs');

const cloudinaryCloud  = async () => {
   cloudinary.config({
      cloud_name: config.CLOUDINARY_NAME,
      api_key: config.CLOUDINARY_API_KEY,
      api_secret: config.CLOUDINARY_SECRET_KEY,
   });
}

module.exports = cloudinaryCloud