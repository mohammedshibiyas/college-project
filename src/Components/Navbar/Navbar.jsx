import React from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location=useLocation()
  const username = location.state && location.state.username;
  return (
    <div>
     <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">ISS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link to='/' className='nav-link active'>Home</Link>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">About Us</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Admission</a>
        </li>
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
        </li>
      </ul>
      <p className='nav-admin-name'><i className="fa fa-user" aria-hidden="true"></i>{username}</p>
    </div>
    
  </div>
</nav>
    </div>
  )
}

export default Navbar
