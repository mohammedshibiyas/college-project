import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import './StaffReg.css'
import axios from 'axios';
// import { useLocation } from 'react-router-dom';

const StaffReg = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(JSON.parse(storedUsername));
    }
  }, []);
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
  }


  const registerStaff=async(e)=>{
    e.preventDefault()
    // console.log(val);
    if (!val.username || !val.password) {
      alert("Please enter both username and password");
      return;
    }
    if (val.password!=val.confirmpassword){
      alert("Does not match the password")
    }
   try {
    const res=await axios.post("http://localhost:3041/college/addstaff",{...val,photo:Photo,admin:username})
    console.log(res.data);
   
    if(res.status!=201){
      alert("Data Not Added")
    }else{
      alert("Seccussfully Registred")
      // navigate("/adminlogin")
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
            <div className="staff-reg-card-heading"><h4>Staff Register</h4></div>
          <form action="" className='staff-reg-form'> 
          <div>
              {/* <input type="text" placeholder='Admin' name='admin' onChange={Getdata} /> */}
              <input type="text" placeholder='Emp id' onChange={Getdata} name='empid'/>
          </div>
          <div>
             <input type="text" placeholder='Full Name' name='name'  onChange={Getdata} />
             <input type="text" placeholder='Username' onChange={Getdata} name='username'/>
          </div>
          <div>
            <input type="password"  placeholder='Password' name='password'  onChange={Getdata} />
            <input type="password"  placeholder='Conform password' onChange={Getdata} name='confirmpassword'/>
          </div>
            <div>
              <input type="email"  placeholder='Email' name='email'  onChange={Getdata} />
              <input type="text" placeholder='Phone number' onChange={Getdata} name='phone'/></div>
            <div> 
              <input type="text" placeholder='Designation' name='designation'  onChange={Getdata} />
              <input type="text" placeholder='Salary' onChange={Getdata} name='salary'/></div>
            <div> 
              <input type="text" placeholder='Expirience' name='expirience'  onChange={Getdata} />
              <input type="text" placeholder='Address' onChange={Getdata} name='address'/></div>
            <div>
              <input type="file" placeholder='Image' className='file' onChange={Upload} name='photo'/>
            </div>
            <button onClick={registerStaff}>Register</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default StaffReg
