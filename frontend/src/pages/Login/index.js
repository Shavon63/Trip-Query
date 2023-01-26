import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../utils/api';
import { motion } from 'framer-motion';
import "./login.css"


function Login({setIsLoggedIn, loggedIn, setUser}) {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate()

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  function handleSubmit(event){
    event.preventDefault();
    // logIn(formState)
    logIn(formData)
    .then((data) => {
      localStorage.token = data.token
      setIsLoggedIn(true)
      setUser(data.user)

  })
  navigate('/account')
  };



  
  // Note that we need to use `htmlFor` instead of `for` in JSX
  return (
    <motion.form onSubmit={handleSubmit} className="login-form"
    animate={{y: 0}} 
    initial={{y:-500}}
    transition={{type: "tween", duration: 1.5 }}
    >
      <h2>Sign In</h2>
      <div>
      <label htmlFor="username"></label>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        value={formData.username}
        placeholder="Username"
        className="input"/>

      </div>
      <div>
      <label htmlFor="password"></label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
        placeholder="Password"
        className="input"/>
        </div>
      <button type="submit" className="input">Login</button>
  
    </motion.form>
  );
}
export default Login;