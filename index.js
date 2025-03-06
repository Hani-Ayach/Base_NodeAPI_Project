const express = require('express')
const mongoose=require('mongoose');
const productRoute = require('./routes/product.route');
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/products',productRoute)

mongoose.connect("mongodb+srv://hanirayach:g77gqcD9iuWcbqIj@backenddb.hg0gf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB").then(()=>{
    console.log("Database connected successfully")
    app.listen(3000,()=>{
        console.log("App is running on port 3000")
    })
    
}).catch((err)=>{
console.log(err.message);
})