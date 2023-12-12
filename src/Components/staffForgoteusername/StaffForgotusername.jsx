import React, { useState } from 'react';
import './Staffforgotusername.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StaffForgotusername = () => {
  const [phone, setPhone] = useState("");
  const [emp, setEmp] = useState(""); 
  const [usernameMessage, setUsernameMessage] = useState(""); 

  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  const getUsername = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(`http://localhost:3041/college/getusername/${phone}`);
      setEmp(res.data.username);
      setUsernameMessage(`Username is: ${res.data.username}`);
    } catch (error) {
      setUsernameMessage("Username not found"); // Handle error if username is not found
    }
  };

  return (
    <div>
      <div className="staff-forgot-card">
        <h5>Forgot Username</h5>
        <div className="staff-forgot-form">
          <div>
            <input type="text" placeholder='Registered Phone number' onChange={handleChange} name='name' />
          </div>
          <button onClick={getUsername}>Find username</button>
          <p>{usernameMessage}</p>
          <div>
            <Link className='stf-frgt-usr' to='/stafflogin'>Back</Link> {/* Assuming you have a route for the 'Back' link */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffForgotusername;
