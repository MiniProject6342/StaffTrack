import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Mainpage from './Mainpage';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import Employee from './Employee';
import EmpDashboard from './EmpDashboard';
import LeaveEmp from './LeaveEmp';
import ALogin from './ALogin';
import Display from './Display';
import LeaveApproval from './LeaveApproval';
import PaySlip from './PaySlip';
import CheckStatus from './CheckStatus';
import UpdateEmployee from './UpdateEmp';
export default function Main() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Mainpage/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/EmpDashboard/:id' element={<EmpDashboard/>}></Route>
      <Route path="/employee" element={<Employee/>}></Route>
      <Route path='/Update/:id' element={<UpdateEmployee/>}></Route>
      <Route path='/leave/:id' element={<LeaveEmp/>}></Route>
      <Route path='/Alogin' element={<ALogin/>}></Route>
      <Route path="/display" element={<Display/>}></Route>
      <Route path='/la' element={<LeaveApproval/>}></Route>
      <Route path='/payslip/:id' element={<PaySlip/>}></Route>
      <Route path='/cst/:id' element={<CheckStatus/>}></Route>
    </Routes>
  </Router>
  )
}
