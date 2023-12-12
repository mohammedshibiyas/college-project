import React from 'react'
import './Studentlogin.css'
import { Link } from 'react-router-dom'
const Studentlogin = () => {
  return (
    <div>
       <div className="studentlogin-main">
        <div className="studentlogin-card">
            <div className="student-login-card-heading"><h4>Student Register</h4></div>
          <form action="" className='student-login-form'> 
            <div><input type="text" placeholder='Username' /></div>
            <div><input type="password"  placeholder='Password'/></div>
            <button>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Studentlogin
