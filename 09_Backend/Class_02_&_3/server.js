const express = require("express");

const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body

app.use(express.json());

//import route for todo API
const todoRoutes = require("./routes/todo");

//mount or Add  the todo API routes
app.use("/api/v1", todoRoutes);

// start server

app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT} successfuly`);
})

//connect to datbase
const dbConnect = require("./config/database")
dbConnect();

//default route
app.get("/",(req,res)=>{
    res.send(`<h1>This Home Page  of Todo App ok</h2>`);
})