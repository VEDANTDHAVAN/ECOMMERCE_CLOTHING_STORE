const express = require('express');
const router = express.Router();
const cors = require("cors");
const { test, registerUser, loginUser, updateUser, deleteUser, readUser, adminLogin } = require('../controllers/auth.controllers.js')
//Middlewares
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

/*router.use(
    cors({
        credentials:true,
        origin: 'http://localhost:5174'
    })
)*/
router.post('/api/register', registerUser)
router.post('/api/login', loginUser)
router.post('/api/create', registerUser)
router.post('/api/admin', adminLogin)
router.get('/read', readUser)
router.put('/api/update/:id', updateUser)
router.delete('/api/delete/:id', deleteUser)

module.exports = router