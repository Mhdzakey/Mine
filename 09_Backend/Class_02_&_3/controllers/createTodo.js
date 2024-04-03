//import model 
const Todo = require("../models/todo");

exports.createTodo = async (req,res) =>{
    try {
        // extract title and description from response body
        const {title, description} = req.body;
        //create a new Todo Obj and insert into Db
        const response = await Todo.create({title, description});
        //send a json response with success flag
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry created Successfully"
        });
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success:false,
            data:"Internal server error",
            message:error.message,
        })
    }
} 