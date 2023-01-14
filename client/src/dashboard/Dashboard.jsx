import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import "./dashboard.css"

const Dashboard = () => {
  let [count,setCount] = useState(0)
  useEffect(()=>{
    axios.get("/countMembers").then(res=>setCount(res.data.data))
  },[])
  return (
    <div className='dashboard-container'>
      <div className='dashboard'>
        <h1>Welcome to the <span> Dashbard.</span></h1>
        <div className='dashboard-info'>
          <div className='dashboard-info-members'>
            <div className='dashboard-info-members-details'>
            <h3>Members already joined us and counting</h3>
            <span>{count}</span>
            </div>
            <div className = 'dashboard-animate'>
              <div className='dashboard-animate-element' id='dashboard-animate1'></div>
              <div className='dashboard-animate-element' id='dashboard-animate2'></div>
              <div className='dashboard-animate-element' id='dashboard-animate3'></div>
              <div className='dashboard-animate-element' id='dashboard-animate4'></div>
            </div>
          </div>
          <div className='dashboard-info-sales'>
            <div className='dashboard-info-sales-details'>
              <h3>Current sales number</h3>
              <span>101</span>
            </div>
            <div className = 'dashboard-animate'>
              <div className='dashboard-animate-element' id='dashboard-animate1'></div>
              <div className='dashboard-animate-element' id='dashboard-animate2'></div>
              <div className='dashboard-animate-element' id='dashboard-animate3'></div>
              <div className='dashboard-animate-element' id='dashboard-animate4'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard