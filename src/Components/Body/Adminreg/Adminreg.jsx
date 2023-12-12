import React, { useState } from 'react'
import './Adminreg.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Adminreg = () => {
  const navigate=useNavigate()
  const [val,setVal]=useState({
    name:"",
    username:"",
    password:""
  })

  const Getdata=(e)=>{ 
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    // console.log(val);
  }

  const registerData=async(e)=>{
    e.preventDefault()
    console.log(val);
    const res=await axios.post("http://localhost:3041/college/addadmin",{...val})
    if(res.status!=201){
      alert("Data Not Added")
    }else{
      alert("Seccussfully Registred")
      navigate("/adminlogin")
    }
    // console.log(res);
  }

  return (
    <div>
      <div className="adminreg-main">
      <div className="admin-reg-card-heading"><h4>Admin Register</h4></div>

        <div className="adminreg-card">
          <form action="" className='admin-reg-form'> 
          <div> <input type="text" placeholder='Full Name' name='name' onChange={Getdata}/></div>
            <div><input type="text" placeholder='Username' name='username' onChange={Getdata} /></div>
            <div><input type="password"  placeholder='Password' name='password' onChange={Getdata}/></div>
            <button onClick={registerData}>Register</button>
            </form>
       
            <div  className='admn-reg-ihave-ac'><Link to='/adminlogin' className='admn-reg-ihave-ac-text'>I have an account</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Adminreg
