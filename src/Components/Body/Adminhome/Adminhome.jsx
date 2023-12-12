import React, { useEffect, useState } from 'react'
import './Adminhome.css'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const Adminhome = () => {
    // const location=useLocation()
    // const username = location.state && location.state.username;
    const [username, setUsername] = useState("");

    useEffect(() => {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(JSON.parse(storedUsername));
      }
    }, []);
  
  return (
    <div>
      <div className="adminhome-main">
        <div className="admin-view-text">
        <h5>Admin : {username}</h5>
        </div>
        <div className="admin-home-details">
          <div className="admin-home-details-left">
          <h4 id='staff-head'>Staff</h4>
            <div className="view-full-staffs">
              <Link className='view-all-staff-btn' to='/allstafflist'>View All  </Link>
              <div className="adminhome-reg-staff-btn">
              <Link to='/staffreg' className='adminhome-reg-staff-button'>Register staff</Link>
              </div>
            </div>
          </div>
          <div className="admin-home-details-right">
          <h4 id='staff-head'>Student</h4>
          <div className="view-full-students">   
          <Link className='view-all-staff-btn' to='/allstafflist'>View All   </Link>
              <div className="adminhome-reg-staff-btn">
              <Link to='/staffreg' className='adminhome-reg-staff-button'>Register student</Link>
              </div>
          </div>
          </div>
        </div>
        {/* <Link to='/staffreg'>Register staff</Link> */}
      </div>
    </div>
  )
}

export default Adminhome
