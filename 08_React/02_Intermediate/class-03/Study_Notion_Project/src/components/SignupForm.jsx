import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-hot-toast'
const SignupForm = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [accountType, setAccountType] = useState("student");
  const navigate = useNavigate();
  function changeHandler(event) {
    setFormData((preData) => ({
      ...preData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event){
    event.preventDefault();
    if(formData.password !== formData.confirmPassword){
      toast.error("Password not matched");
      return;
    }
     setIsLoggedIn(true);
    toast.success("Account Created");

    const finalAccountData = {
      ...formData,
      accountType
    };
    console.log("Printing Final Account Data");
    console.log(finalAccountData);
    navigate("/dashboard");
  }
  return (
    <div>
      {/* // Student-Instructor Tab */}

      <div className="flex  bg-blue-100 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
        className={`${accountType === "student" ? "bg-blue-400 text-black":"bg-transparent text-black "} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=> setAccountType("student")}
        >Student</button>
        <button
           className={`${accountType === "instructor" ? "bg-blue-400 text-black":"bg-transparent text-black "} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={()=> setAccountType("instructor")}
        >Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* First and Last Name */}
        <div className="flex justify-between">
          <label>
            <p className="text-[0.875rem] text-blue-50 mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="bg-black  rounded-[0.5rem] text-white w-full p-[12px]"

            />
          </label>

          <label>
            <p className="text-[0.875rem] text-blue-50 mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="bg-black  rounded-[0.5rem] text-white w-full p-[12px]"

            />
          </label>
        </div>

        {/* Email Address */}
        <label>
          <p className="w-full text-[0.875rem] text-blue-50 mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-200">*</sup>
          </p>

          <input
            type="email"
            required
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email address"
            name="email"
            className="bg-black  rounded-[0.5rem] text-white w-full p-[12px]"

          />
        </label>

        {/* Create Password and Confirm Password */}
        <div className="relative flex justify-between">
          <label>
            <p className="text-[0.875rem] text-blue-50 mb-1 leading-[1.375rem]">
              Create Password <sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showPassword ? "text" : "password"}
              required
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter password"
              name="password"
              className="bg-black  rounded-[0.5rem] text-white w-full p-[12px]"

            />
            <span   className="absolute right-66 top-[38px] cursor-pointer  " onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>): (<AiOutlineEye fontSize={24} fill="#AFB2BF" />)}
            </span>

            
          </label>

          <label>
            <p className="text-[0.875rem] text-blue-50 mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>

            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Enter Confirm password"
              name="confirmPassword"
              className="bg-black  rounded-[0.5rem] text-white w-full p-[12px]"

            />
            <span   className="absolute right-3 top-[38px] cursor-pointer  " onClick={() => setShowConfirmPassword((prev) => !prev)}>
            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>): (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
            </span>

            
          </label>
        </div>
        <button className="w-full bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-6">Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
