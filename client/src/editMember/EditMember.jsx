import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import "./editMember.css"

const EditMember = () => {
    let navigate = useNavigate();

    let userId = useParams().userId
    let token = localStorage.getItem('Authorization')
    let isAdmin = localStorage.getItem('isAdmin')

    let [userDetails,setUserDetails] = useState({})
    let [updateDetails,setUpdateDetails] = useState({})

    let [isChnaged,setIsChnaged] = useState(false)


    useEffect(()=>{
        if(isAdmin === "false"){
            navigate("/dashboard")
        }
        axios.get(`/members/${userId}`,{headers:{"Authorization":token}})
        .then(res => {
            setUserDetails(res.data.data)
        })
        .catch(err => {alert(err.response.data.message)})
    },[userId, token, isAdmin, navigate])    

    const handleChange = (e) => {
        setIsChnaged(true)
        let {name, value} = e.target
        setUpdateDetails({
            ...updateDetails,
            [name]: value
        })
        setUserDetails({
            ...userDetails,
            [name]: value
        })
    }
    const handleEdit = (e) => {
        axios.put(`/updateMember/${userId}`,updateDetails,{headers:{"Authorization":token}})
        .then(res=>{
            alert("update successful")
            navigate("/admin")

        })
        .catch(err=>{
            console.log(err)
        })
    }

  return (
    <div className='editMember-container'>
        <div className='editMember-form'>
            <h1>Update Member</h1>

            <div className = "form-input"> 
            <input onChange={handleChange} required type='text' name='fName' value={userDetails.fName}/><label>First Name</label>
            </div>
            <div className = "form-input"> 
            <input onChange={handleChange} required type='text' name='lName' value={userDetails.lName}/><label>Last Name</label>
            </div>
            <div className = "form-input"> 
            <input onChange={handleChange} required type='text' name='email' value={userDetails.email}/><label>E-mail</label>
            </div>
            <div className = "form-input"> 
            <input onChange={handleChange} required type='text' name='password' value={userDetails.password}/><label>Password</label>
            </div>
            {isChnaged && <button onClick={handleEdit} >Apply Changes</button>}
        </div>
    </div>
  )
}

export default EditMember