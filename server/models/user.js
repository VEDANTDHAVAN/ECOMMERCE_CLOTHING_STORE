const mongoose = require('mongoose')
const {Schema} = mongoose;
const ROLES = {
    Admin: 'Admin',
    User: 'User', 
}
const userScheme= new Schema({
    firstname:{type: String, required: true},
    lastname: {type: String, required: true},
    email: {
        type: String,
        unique: true,
        required: true
    },
    password:{type: String, required: true},
    confpassword:{type: String, required: true},
    role: {type: String, default: 'User'},
    cartData: {type: Object, default: {}}
},{
    timestamps: true
}, {minimize: false})

const userModel = mongoose.models.user || mongoose.model('User', userScheme);

module.exports = userModel;