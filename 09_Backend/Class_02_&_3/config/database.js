const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect =  () => {
    mongoose.connect(process.env.DataBase_URL)
    .then(() => {console.log("DB Connection is ok")})
    .catch((error)=>{
        console.log("DB Connection is issue");
        console.error(error.message);
        process.exit(1)


    });
}
module.exports = dbConnect;