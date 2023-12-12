import React, { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import './StaffLogin.css'
import axios from 'axios'

const StaffLogin = () => {
  const navigate=useNavigate()
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  

  const Login=async(e)=>{
    e.preventDefault()
    try {
      const res=await axios.post("http://localhost:3041/college/stafflogin",{
        username:username,
        password:password
      })
      const data=res.data;
      console.log(data);
      if(res.status!==404){
        const staff_token=data.token
        localStorage.setItem("token",JSON.stringify(staff_token))
        navigate("/staffhome",{state:{username}})
      }
    } catch (error) {
      alert("cant't Login",error)
    }
  }
  return (
    <div>
       <div className="stafflogin-main">
        <div className="stafflogin-card">
            <div className="staff-login-card-heading"><h4>Staff Login</h4></div>
          <form action="" className='staff-login-form'> 
            <div><input type="text" placeholder='Username' onChange={(e)=>setUsername(e.target.value)}/></div>
            <div><input type="password"  placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/></div>
            <div className='forgot-pwd-div'>
          <div><Link className='forgot-pwd' to='/staffforgotusername'>Forgot Username</Link></div>
          <div><Link className='forgot-pwd' to='/staffforgotpwd'>Forgot Password</Link></div>
              </div>
            <button onClick={Login}>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default StaffLogin
