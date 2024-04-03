
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required:true,
            maxlenght:50,
        },
        description:{
            type:String,
            required:true,
            maxlenght:150,
        },
        createdAt:{
            type:String,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:String,
            required:true,
            default:Date.now(),
        }
    }
);
module.exports = mongoose.model("Todo", todoSchema);