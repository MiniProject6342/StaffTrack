import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './dashBoard1.css';
export default function EmpDashboard() {
  const [eid, setId] = useState('');
  const [employeefname, setFName] = useState("");
  const [employeelname, setLName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [dept, setDept] = useState("");
  const [desig, setDesig] = useState("");
  const [dob, setDob] = useState("");
  let empemail=useParams();
  const navigate=useNavigate();
  const handleSubmit1=async(event)=>{
    navigate('/EmpDashboard/'+email);
  }
  const handleSubmit2=async(event)=>{
    navigate('/leave/'+email);
  }
  const handleSubmit4=async(event)=>{
    navigate('/cst/'+email);
  }
  const handleSubmit3=async(event)=>{
    navigate('/payslip/'+email);
  }
  useEffect(() => {
    (async () => await Load())();
  });
  async function Load() {
    console.log(empemail)
    const result=await axios.get("http://localhost:8088/api/v1/employee/login/"+empemail.id)
    console.log(result.data);
    setId(result.data.employeeid);
    setFName(result.data.employeefname);
    setLName(result.data.employeelname);
    setMobile(result.data.mobile);
    setEmail(result.data.email);
    setPass(result.data.pass);
    setDept(result.data.dept);
    setDesig(result.data.desig);
    setDob(result.data.dob);
    }
  Load();
  return (
    <div>
    <html>
      <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </head>
      <body>
        <Navbar>
          <Nav>
            <Button className='btn' onClick={handleSubmit1}>Home</Button>
            <Button className='btn'><Link to='/' className="ln">Logout</Link></Button>
          </Nav>
        </Navbar>
        <div class="container-fluid">
          <div class="row content" style={{ "height": "700px" }}>
            <div class="col-sm-2 sidenav" style={{
              "height": "100%",
              "background-color": "#555",
              "color": "white",
              "padding": " 15px"
            }}>
              <h4>Employee</h4>
              <ul class="nav nav-pills nav-stacked">
                <li class="active" onClick={handleSubmit1}><Link to="/EmpDashboard">Dasboard</Link></li>
                <li  onClick={handleSubmit2}><Link to="/leave">Apply Leave</Link></li>
                <li  onClick={handleSubmit4}><Link to="/cst">Leave History</Link></li>
                <li onClick={handleSubmit3}><Link to='/payslip'>Salary</Link></li>
              </ul>
            </div>

            <div class="col-sm-10">
              <table class="table table-dark" align="center">
                <thead>
                  <tr>
                    <th scope='col'>Employee Id</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Mobile No.</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>Department</th>
                    <th scope='col'>Date of joining</th>
                   
                  </tr>
                </thead>
                    <tbody>
                      <tr>
                        <td>{eid}</td>
                        <td>{employeefname}</td>
                        <td>{employeelname}</td>
                        <td>{mobile}</td>
                        <td>{email}</td>
                        <td>{dept}</td>
                     
                        <td>{dob}</td>
                      </tr>
                    </tbody>
              </table>
            </div>
          </div>
        </div>
      </body>
    </html>
  </div>
  )
}
