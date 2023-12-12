import React, { useState } from 'react'
import './AdminLogin.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AdminLogin = () => {
  const navigate=useNavigate()
const [username,setUsername]=useState('')
const [password,setPassword]=useState('')



// const Getdata=(e)=>{ 
//   setUsername((pre)=>({...pre,[e.target.name]:e.target.value}))
//   console.log(val);
// }

const Login=async(e)=>{
  e.preventDefault()
  try {
    const res=await axios.post("http://localhost:3041/college/adminlogin",{
      username:username,
      password:password
    })
    const data=res.data;
    console.log(data);
    if(res.status!==404){
      const token=data.token
      localStorage.setItem("token",JSON.stringify(token))
      localStorage.setItem("username", JSON.stringify(username));
      navigate("/adminhome",{state:{username}})
    }
  } catch (error) {
    alert("cant't Login",error)
  }
}

  return (
    <div>
       <div className="adminlogin-main">
       <div className="admin-reg-card-heading"><h4>Admin Login</h4></div>
        <div className="adminlogin-card">
           
          <form action="" className='admin-reg-form'> 
            <div><input type="text" placeholder='Username' name='username' onChange={(e)=>setUsername(e.target.value)} /></div>
            <div><input type="password"  placeholder='Password' name='password' onChange={(e)=>setPassword(e.target.value)}/></div>
            <button onClick={Login} >Login</button>
            <div className='reg-btn'><Link to='/adminregister' className='regbtn'>Register</Link></div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
