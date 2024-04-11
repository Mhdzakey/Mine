const bcrypt = require("bcrypt");
const User = require("../Model/User");

//signup route handler

exports.signup = async (req,res)=>{
    try {
        
        const {name,email,password,role} = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(500).json({
                success:false,
                message:"Already user exists",
            });

        }
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);


        } catch (error) {
            return res.status(500).json({
                success:false,
                message:"Error in hashing password",
            });
        }

        const user = await User.create({
            name,email,password:hashedPassword,role
        })
        return res.status(200).json({
            success:true,
            message:"User created Ok"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"user cannot be register, try again later",
        });
    }
}