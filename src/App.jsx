import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Body/Home/Home'
import AdminLogin from './Components/Body/AdminLogin/AdminLogin'
import StaffLogin from './Components/Body/StaffLogin/StaffLogin'
import StaffReg from './Components/Body/StaffReg/StaffReg'
import Adminpannel from './Components/Body/Adminpannel/Adminpannel'
import Adminreg from './Components/Body/Adminreg/Adminreg'
import Adminhome from './Components/Body/Adminhome/Adminhome'
import Studentreg from './Components/Body/Studentreg/Studentreg'
import Studentlogin from './Components/Body/Studentlogin/Studentlogin'
import Staffhome from './Components/Body/Staffhome/Staffhome'
import Allstafflist from './Components/Body/Allstafflist/Allstafflist'
import Staffedit from './Components/Body/StaffEdit/Staffedit'
import Staffdetails from './Components/Body/Staffdetails/Staffdetails'
import StaffForgotusername from './Components/staffForgoteusername/StaffForgotusername'
import StaffForgotPwd from './Components/StaffForgotPwd/StaffForgotPwd'
import { Router } from 'express'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/adminlogin' Component={AdminLogin}/>
      <Route path='/stafflogin' Component={StaffLogin}/>
      <Route path='/staffreg' Component={StaffReg}/>
      <Route path='/adminregister' Component={Adminreg}/>
      <Route path='/adminpannel' Component={Adminpannel}/>
      <Route path='/adminhome' Component={Adminhome}/>
      <Route path='/studentreg' Component={Studentreg}/>
      <Route path='/studentlogin' Component={Studentlogin}/>
      <Route path='/staffhome' Component={Staffhome}/>
      <Route path='/allstafflist' Component={Allstafflist}/>
      <Route path='/staffdetails/:id' Component={Staffdetails}/>
      <Route path='/staffforgotusername' Component={StaffForgotusername}/>
      <Route path='/staffedit/:id' Component={Staffedit}/>
      <Route path='/staffforgotpwd' Component={StaffForgotPwd}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
