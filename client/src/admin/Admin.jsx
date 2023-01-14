import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MemberCard from '../memberCard/MemberCard'
import "./admin.css"

const Admin = () => {
    let token = localStorage.getItem('Authorization')
    let isAdmin = localStorage.getItem('isAdmin')
    let navigate = useNavigate()

    let [members, setMembers] = React.useState([])
    let [memberData, setMemberData] = React.useState({
        fName: '',
        lName: '',
        email: '',
        password: ''
    })
    
    useEffect(()=>{
        if(isAdmin==="false"){
            navigate("/dashboard")
        }
        axios.get("/members", {headers: { Authorization: token }})
        .then(res=>{
            setMembers(res.data.data)
        })
        .catch(err=>console.log(err))
    },[isAdmin, navigate, token])

    const handleChange = (e) => {
        let {name, value} = e.target
        setMemberData({...memberData, [name]: value})
    }
    const handleSubmit = () => {
        axios.post("/addMember",memberData,{headers: { Authorization: token }})
        .then(res=>{
        window.location.reload()
        })
        .catch(err=>{
            alert(err.response.data.message)
        })


    }


  return (
    <div className='admin-container'>
        <div className='admin-members'>
            <h1 style={{color:"white"}}>Members</h1>
            <div className='admin-member'>
                {members.map((member, index) => (
                    <MemberCard key= {member._id} id = {member._id} fName={member.fName} lName={member.lName} email={member.email} />
                ))}
            </div>
        </div>

        
        <div className = "admin-add-member">
        <h1>Add Member</h1>
            <div className = "form-input"> 
            <input onChange={handleChange} required type='text' name='fName' value={memberData.fName}/><label>First Name</label>
            </div>
            <div className = "form-input"> 
            <input onChange={handleChange} required type='text' name='lName' value={memberData.lName}/><label>Last Name</label>
            </div>
            <div className = "form-input"> 
            <input onChange={handleChange} required type='text' name='email' value={memberData.email}/><label>E-mail</label>
            </div>
            <div className = "form-input"> 
            <input onChange={handleChange} required type='text' name='password' value={memberData.password}/><label>Password</label>
            </div>
            <button onClick={handleSubmit} >Register</button>
        </div>
    </div>
  )
}

export default Admin