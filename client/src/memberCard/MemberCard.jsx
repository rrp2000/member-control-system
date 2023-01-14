import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./memberCard.css"

const MemberCard = (props) => {

    let navigate  = useNavigate()

    let token = localStorage.getItem('Authorization');
    const handleDelete = () => {
        axios.delete(`/deleteMember/${props.id}`,{headers:{"Authorization":token}})
        .then((res) => {
            window.location.reload()
        }).catch((error) => {
            alert(error.response.data.message)
        })
    }
  return (
    <div className='memberCard-container'>
        <h3>{props.fName} {props.lName}</h3>
        <p>{props.email}</p>
        <div className='memberCard-buttons'>
            <button onClick={()=> navigate(`/edit/${props.id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default MemberCard