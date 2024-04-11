const mongoose = require("mongoose");
require("dotenv").config();

exports.connect= ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("DB is ok")})
    .catch((error)=>{console.log("DB error") 
                console.log(error)
                process.exit(1);
            })
}