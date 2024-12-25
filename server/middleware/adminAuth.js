const jwt = require('jsonwebtoken');
const config = require('../controllers/config.js')
const adminAuth = async (req, res, next)=> {
    try {
        const {token} = req.headers;
        if(!token){
          return res.json({success: false, message: "UnAuthorized Access , Login Again!!"});
        } 
        const tokenDecode = jwt.verify(token, config.JWT_SECRET);
        if(tokenDecode !== config.ADMIN_EMAIL + config.ADMIN_PASSWORD){
            return res.json({success: false, message: "UnAuthorized Access, Incorrect Token , Login Again!!"});  
        }
        next()
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

module.exports = adminAuth