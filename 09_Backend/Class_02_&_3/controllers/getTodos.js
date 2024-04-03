const Todo = require("../models/todo");

exports.getTodos = async (req,res)=>{
    try {

        //fetch all todo from dataBase
        const todo = await Todo.find({});

        //response 
        res.status(200)
        .json({
            success:true,
            data: todo,
            message:"All todo retrieved is ok",
        })
    } catch (error) {
        console.error(error);
        res.status(500)
        .json({
            success:false,
            error:error.message,
            message:"Server error in all todo fetching ",

        })
        
    }
}

exports.getTodosById = async (req,res)=>{
    try {
        const id = req.params.id;
        //fetch single todo from dataBase
        const todo = await Todo.findById({_id: id})

        if(!todo){
            return res.status(404).json({
                success:false,
                message:"Element not found by id"
            })
        }
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:`Single todo fetched by ${id} is ok`,
        })

        //response 
        res.status(200)
        .json({
            success:true,
            data: todo,
            message:"Single todo retrieved is ok",
        })
    } catch (error) {
        console.error(error);
        res.status(500)
        .json({
            success:false,
            error:error.message,
            message:"Server error in all todo fetching ",

        })
        
    }
}