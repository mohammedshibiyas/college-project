import React, { useEffect, useState } from 'react'
import './Allstaflist.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Allstafflist = () => {
    const [getStaff,setStaff]=useState([])
    const getAllstaff=async()=>{
      const res=await axios.get("http://localhost:3041/college/getfullstaff")
      setStaff(res.data)
      console.log(getStaff);
      
      
    }
    useEffect(()=>{
        getAllstaff() 
    } ,[])

    const deleteStaff = async (id) => {
      try {
        const confirmed = window.confirm("Are you sure you want to delete this staff member?");
    
        if (confirmed) {
          const res = await axios.delete(`http://localhost:3041/college/deletestaff/${id}`);
          console.log("deleted", res.data);
          getAllstaff();
        } 
      } catch (error) {
        console.log(error);
      }
    };


    
  return (
    <div>
      <div className="allstafflist-heading">
        <h2>All Staffs</h2>
      </div>
      <div className="list-of-staffs container">
        <div className="row">
          
              {
                 getStaff.map((data,index)=>
                 <div className="col-lg-3" key={index} >
                   <Link className='card-link' to={`/staffdetails/${data._id}`}>
                   
                    <div className="staff-card" >
                    <div className="staff-dp"><img src={data.photo} alt="" /></div>
                    <h3 className='card-heading'>{data.name}</h3>
                    <p className='card-para'>{data.designation}</p>
                    {/* <p className='card-para'>{data.empid}</p> */}
                    <div className="allstaff-delete-view-btns">
                        {/* <Link className='allstaff-view-btn'>View</Link> */}
                        <Link className='allstaff-delete-btn' to={`#${data._id}`} onClick={() => deleteStaff(data._id)}>Delete</Link>
                    </div>
                </div>
                </Link>
                </div>
                  )
              }
           

        </div>
      </div>
    </div>
  )
}

export default Allstafflist
