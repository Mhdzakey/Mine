

//instance of express   

// creating instance of the express app

//Server Instantiate
const express = require("express");
const app = express();

//used to parser req.body in express -> POST or PUT 
const bodyParser = require('body-parser');

//specifically pasrse JSON data and add it to the req.body object
app.use(bodyParser.json());


app.listen(8000, ()=> console.log("Listening to 8000 port"))

// GET
app.get('/' , (request, response) => {
    response.send("Response FROM APP AT 8000 ");
})

app.post('/api/products' , (request, response)=>{
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Product name is added successfuly");
})

//connecting mongoDB to Node.js 

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/zakey',{
    useNewUrlParser: true,
    useUnifiedToplogy:true
})
.then(()=>{console.log("Connection successful connecting m_DB to Server")})
.catch((e)=>{console.log("Connection failed to successful")});