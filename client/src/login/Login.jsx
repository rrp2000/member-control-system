import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login.css"
const Login = () => {

    let navigate = useNavigate()
    
    let [loginDetails, setLoginDetails] = useState({
        email:"",
        password:"",
    })

    const handleChange = (e) => {
        let {name, value} = e.target
        setLoginDetails({...loginDetails, [name]: value})
    }
    const handleSubmit = (e) => {
        axios.post("/login",loginDetails)
        .then(res =>{
            localStorage.setItem("Authorization",res.data.token)
            localStorage.setItem("isAdmin",res.data.isAdmin)
            alert("Loggedin successfully")

            navigate("/dashboard")
        })
        .catch(err =>{alert(err.response.data.message)})


    }
  return (
    <div className='login-container'>
        <div className='login-form'>
            <h1>Login</h1>
            <div className = "form-input"> 
            <input onChange={handleChange} required type='text' name='email' value={loginDetails.email}/><label>E-mail</label>
            </div>
            <div className = "form-input"> 
            <input onChange={handleChange} required type='text' name='password' value={loginDetails.password}/><label>Password</label>
            </div>
            
            <Link to="/">Not Registed?</Link>
            
            <button onClick={handleSubmit} >Register</button>
        </div>
    </div>
  )
}

export default Login