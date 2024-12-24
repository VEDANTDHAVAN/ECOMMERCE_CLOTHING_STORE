const express = require('express');
const cors = require('cors');
const {mongoose} = require('mongoose');
const app = express();
const config = require('./controllers/config.js');
const cookieParser = require('cookie-parser');
const connectCloud = require('./config/cloudinary.js');
const router = require('./routes/auth.routes.js');
const productRouter = require('./routes/product.routes.js');
//database Connection
/*mongoose.connect(config.mongoDbUrl)
.then(()=> console.log('Database Connected!!'))
.catch((err)=> console.log('Database Connection Error:', err))
*/
mongoose.connect(config.mongoDbUrl2)
.then(()=> console.log('Shop Database Connected'))
.catch((err)=> console.log('Database Not Connected!!'))
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.use('/', require('./routes/auth.routes.js'))
app.use('/api/user', router);
app.use('/api/product', productRouter);

const port = 8000;
app.use('/', require('./routes/auth.routes'))
app.listen(port, () => console.log(`Server is running on port ${port}`));

app.get('/', (req, res)=>{
    res.send("API is Working")
})

