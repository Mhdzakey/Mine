import React, { useState } from "react";
import {AiOutLineEye,  AiOutLineEyeInvisible} from 'react-icons/ai'

const LoginForm = () => {
  const [formDat, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  function changeHandler(event) {
    setFormData((preData) => ({
      ...preData,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <form action="">
      <label>
        <p>
          Email Address <sup>*</sup>
        </p>

        <input
          type="email"
          required
          value={formDat.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          name="email"
        />
      </label>

      <label>
        <p>
          Password <sup>*</sup>
        </p>

        <input
          type={showPassword ? ("text"): ("password")}
          required
          value={formDat.password}
          onChange={changeHandler}
          placeholder="Enter password"
          name="password"
        />
        <span onClick={()=> setShowPassword((prev) => !prev)}>
        {showPassword ? (<AiOutLineEyeInvisible/>): (<AiOutLineEye/>)}
        </span>

        <Link to={"#"} ><p>forgot password</p></Link>
      </label>

      <button></button>
    </form>
  );
};

export default LoginForm;
