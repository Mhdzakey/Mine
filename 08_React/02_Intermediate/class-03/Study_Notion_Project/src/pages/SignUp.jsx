import React from 'react'
import signupImg from '../assets/signup.png'
import Template from '../components/Template'
const SignUp = ({setIsLoggedIn }) => {
  return (
    <Template
      title={"Welcome Back"}
      desc1={"Build skills for today, tomorrow, and beyond."}
      desc2={"Education to future-proof your career"}
      image={signupImg}
      formType="signup"
      setIsLoggedIn ={setIsLoggedIn}
        />
  )
}

export default SignUp