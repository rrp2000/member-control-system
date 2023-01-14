import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./signup.css"
const Signup = () => {

    let navigate = useNavigate()
    
    let [signupDetails, setSignupDetails] = useState({
        fName:"",
        lName:"",
        email:"",
        password:"",
    })

    let [isAdmin, setIsAdmin] = useState(false)


    const handleChange = (e) => {
        let {name, value} = e.target
        setSignupDetails({...signupDetails, [name]: value})
    }
    const handleSubmit = (e) => {
        let data = {
            ...signupDetails,
            isAdmin
        }
        axios.post("/register",data)
        .then(res =>{
            alert(isAdmin?"welcome Admin":"Welcome User")
            navigate("/login")
        })
        .catch(err =>{alert(err.response.data.message)})


    }
  return (
    <div className='signup-container'>
        <div className='signup-form'>
            <h1>Sign Up</h1>

            <div className = "form-input"> 
            <input onChange={handleChange} required type='text' name='fName' value={signupDetails.fName}/><label>First Name</label>
            </div>
            <div className = "form-input"> 
            <input onChange={handleChange} required type='text' name='lName' value={signupDetails.lName}/><label>Last Name</label>
            </div>
            <div className = "form-input"> 
            <input onChange={handleChange} required type='text' name='email' value={signupDetails.email}/><label>E-mail</label>
            </div>
            <div className = "form-input"> 
            <input onChange={handleChange} required type='text' name='password' value={signupDetails.password}/><label>Password</label>
            </div>
            <div className = "signup-form-check"> 
            <input onChange = {()=>setIsAdmin(!isAdmin)} type="checkbox" name = "isAdmin" value={isAdmin}/><label>Admin?</label>
            </div>
            

            <Link to="/login">Already Registed?</Link>
            
            <button onClick={handleSubmit} >Register</button>
        </div>
    </div>
  )
}

export default Signup