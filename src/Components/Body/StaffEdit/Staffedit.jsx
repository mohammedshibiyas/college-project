import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './Staffedit.css'

const Staffedit = () => {
    const navigate=useNavigate()
    const {id}=useParams()
    // const [getStaff,setStaff]=useState([])
    let Photo="";
  const [val,setVal]=useState({
    admin:"",
    empid:"",
    name:"",
    username:"",
    password:"",
    confirmpassword:"",
    email:"",
    phone:"",
    designation:"",
    salary:"",
    expirience:"",
    address:"",
    photo:""
  })

  const getFulldata=async ()=>{
    const res=await axios.post(`http://localhost:3041/college/getDetails/${id}`)
    setVal(res.data)
  }
useEffect(()=>{
    getFulldata()
},[])

  const Getdata=(e)=>{ 
    setVal((pre)=>({...pre,[e.target.name]:e.target.value}))
    console.log(val);
  }

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
  }

  const Upload=async(e)=>{
    e.preventDefault()
  
    Photo=await convertToBase64(e.target.files[0])
    console.log(Photo);
    setVal((pre)=>({...pre,[e.target.name]:Photo}))
  }


  const editStaff=async(e)=>{
    e.preventDefault()
   try {
    const res=await axios.patch(`http://localhost:3041/college/editstaff/${id}`,{...val})
    console.log(res.data);
   
    if(res.status==404){
      alert("Data Not Added")
    }else{
      alert("Seccussfully Edited")
      navigate(`/staffdetails/${id}`)
    }
   } catch (error) {
    alert("Data not added",error)
   }
    // console.log(res);
  }

  return (
    <div>
     <div className="staffreg-main">
        <div className="staffreg-card">
            <div className="staff-reg-card-heading"><h4>Edit Staff Details</h4></div>
          <form action="" className='staff-reg-form'> 
          <div>
              <input type="text" placeholder='Admin' name='admin' value={val.admin} onChange={Getdata} />
              <input type="text" placeholder='Emp id' onChange={Getdata}  value={val.empid} name='empid'/>
          </div>
          <div>
             <input type="text" placeholder='Full Name' name='name'   value={val.name} onChange={Getdata} />
             <input type="text" placeholder='Username' onChange={Getdata}  value={val.username} name='username'/>
          </div>
          {/* <div>
            <input type="password"  placeholder='Password' name='password'  onChange={Getdata} />
            <input type="password"  placeholder='Conform password' onChange={Getdata} name='confirmpassword'/>
          </div> */}
            <div>
              <input type="email"  placeholder='Email' name='email'  value={val.email} onChange={Getdata} />
              <input type="text" placeholder='Phone number' onChange={Getdata}  value={val.phone} name='phone'/></div>
            <div> 
              <input type="text" placeholder='Designation' name='designation'  value={val.designation}  onChange={Getdata} />
              <input type="text" placeholder='Salary' onChange={Getdata}  value={val.salary} name='salary'/></div>
            <div> 
              <input type="text" placeholder='Expirience' name='expirience'  value={val.expirience}  onChange={Getdata} />
              <input type="text" placeholder='Address' onChange={Getdata}  value={val.address} name='address'/></div>
            <div>
              <input type="file" placeholder='Image' className='file' onChange={Upload} name='photo'/>
            </div>
           <div> <img src={val.photo} alt="" className='dp' /></div>
            <button  id='edit-btn' onClick={editStaff}>Edit</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Staffedit
