const User = require('../models/user');
const {comparePassword, hashPassword} = require('../helpers/auth');
const jwt = require('jsonwebtoken');
const config = require('../controllers/config.js');
const test = (req, res) => {
    res.json('test is working')
};

function generateToken(userId, callback) {
    const secretKey = "Vedant_Dhavan"; // Replace with your actual secret key
    const payload = { id: userId };
    const options = { expiresIn: '1h' };
  
    console.log('Generating token...');
  
    // Simulate a delay with setTimeout
    setTimeout(() => {
      try {
        const token = jwt.sign(payload, secretKey, options);
        callback(null, token); // Pass the token to the callback
      } catch (error) {
        callback(error, null); // Handle errors
      }
    }, 2000); // 2-second delay
  }
  
const registerUser = async (req, res)=> {
    res.json({msg: "Register API Works"})
    try {
        const {firstname, lastname, email, password, confpassword} = req.body;
        //check if firstname and lastname are entered
        if(!firstname||!lastname){
            return res.json({
                error: 'First name and Last name is Required'
            })
        }
        //check if password is Strong
        if(!password || password.length < 5){
            return res.json({
                error: "Password is required and should be atleast 5 characters"
            })
        }

        //check email
        const exist= await User.findOne({email});
        if(exist){
            return res.json({
                error: "Email is Already Taken!! Try Another Email."
            })
        }  
        //encrypt the password
        const hashedPassword = await hashPassword(password)
        //create user in database
        const user = await User.create({
            firstname, lastname, email, 
            password:hashedPassword, 
            confpassword:hashedPassword,
        })
        generateToken(123, (error, token) => {
            if (error) {
              console.error('Error generating token:', error);
            } else {
              console.log('Generated token:', token);
             return  res.status(200).json({token})
            }
          });
        return res.json(user)
        
    } catch (error) {
        console.log(error)
    }
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        //check if user already exists
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error: 'No user found!!'
            })
        }
        //check if password matches
        const match = await comparePassword(password, user.password)
        if(match){
            //assign a JasonWebToken
            generateToken(123, (error, token) => {
                if (error) {
                  console.error('Error generating token:', error);
                } else {
                  console.log('Generated token:', token);
                  res.status(200).json(token)
                }
              });
              res.json('Passwords Matched!!');
        }
        if(!match){
            //json response
            res.json({
                success: false,
                error: 'passwords do not match!'
            })
        }
    } catch (error) {
        console.log(error)
    }
}

//read user data
//http://localhost:8000/
const readUser = async (req, res) => {
    const data = await User.find({})
    res.json({success: true, data: data})
}
//update user data
//http://localhost:8000/api/update
const updateUser = async (req, res) => {
    console.log("Request Body: ",req.body);
    console.log("Request Params:", req.params);
    const {id} = req.params;
    const {firstname, lastname, email} = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate( id, {firstname, lastname, email},
          {new: true, runValidators: true}
        );
        if(!updatedUser) {
            console.log("User not found or not Updated.");
            return res.status(404).json({error: "User not Updated!"})
        }
        res.status(200).send({message: "User Updated Successfully!!", user: updatedUser});
    } catch (error) {
        console.error("Error Updating User:",error);
        res.status(500).json({error: "Internal Server Error."});
    }
    /*const data = await User.updateOne({_id: _id},rest)
    res.send({success: true, message: 'Data Updated Successfully!!', data: data})*/
};

//delete user
//http://localhost:8000/api/delete
const deleteUser = async (req, res) => {
    const id = req.params.id
    console.log(id)
    const data = await User.deleteOne({_id: id})
    res.send({success: true, message: "Data Deleted Successfully!!", data: data})
}
//http://localhost:8000/api/admin
const adminLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(email === config.ADMIN_EMAIL && password === config.ADMIN_PASSWORD){
          //const token = jwt.sign(email+password, process.env.JWT_SECRET)
          //res.json({success: true, token})
          generateToken(123, (error, token) => {
            if (error) {
              console.error('Error generating token:', error);
            } else {
              console.log('Generated token:', token);
              res.json({success:true,message:'Passwords Matched!!', token});
            }
          });
        }else{
            res.json({success:false, message: "Invalid Credentials!!"})
        }
    } catch (error) {
        console.log(error) 
    }
} 

module.exports = {
    test,
    registerUser,
    loginUser,
    readUser, 
    updateUser,
    deleteUser,
    adminLogin
}