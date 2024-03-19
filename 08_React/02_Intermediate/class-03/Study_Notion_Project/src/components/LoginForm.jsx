import {React,  useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast'
const LoginForm = ({setIsLoggedIn}) => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  let navigate = useNavigate();
function changeHandler(event) {
  setFormData((preData) => ({
    ...preData,
    [event.target.name]: event.target.value
  }));
}

function submitHandler(event){
  event.preventDefault();
  setIsLoggedIn(true);
  toast.success("Logged In");
  console.log("Printing the Form Data");
  console.log(formData);
  navigate("/dashboard");
}
 
  return (
    <form onSubmit={submitHandler}
    className="flex flex-col w-full gap-y-4 mt-6">
      
      <label className="w-full ">
        <p className="text-[0.875rem] text-blue-50 mb-1 leading-[1.375rem]">
          Email Address <sup className="text-pink-200">*</sup>
        </p>

        <input
          className="bg-black  rounded-[0.5rem] text-white w-full p-[12px]"
          type="email"
          required
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          name="email"
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.875rem] text-blue-50 mb-1 leading-[1.375rem]">
         Password <sup  className="text-pink-200">*</sup>
        </p>

        <input className="bg-black rounded-[0.5rem] text-white w-full p-[12px]"
          type={showPassword ? ("text"): ("password")}
          required
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter password"
          name="password"
        />
        <span onClick={()=> setShowPassword((prev) => !prev)}
        className="absolute right-3 top-[38px] cursor-pointer  "
        >
        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>): (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)}
        </span>

        <Link to={"#"} ><p className="text-xs mt-1 text-blue-300 max-w-max ml-auto">forgot password</p></Link>
      </label>

      <button className="bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-4">Sign In</button>
    </form>
  );
};

export default LoginForm;
