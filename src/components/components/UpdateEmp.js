import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {  Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
export default function UpdateEmp() {
    const empemail = useParams();
    const [ob,setob]=useState('');
    const [employeeid, setId] = useState('');
    const [employeefname, setFName] = useState("");
    const [employeelname, setLName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [dept, setDept] = useState("");
    const [desig, setDesig] = useState("");
    const [dob, setDob] = useState("");
    useEffect(() => {
        axios.get("http://localhost:8088/api/v1/employee/login/" + empemail.id).then(res => {
            // alert('wwww')
            return res.data;
        }).then((res) => {
            console.log(res)
            setob(res._id)
            setId(res.employeeid)
            setFName(res.employeefname)
            setLName(res.employeelname)
            setEmail(res.email)
            setMobile(res.mobile)
            setDept(res.dept)
            setDesig(res.desig)
            setDob(res.dob)
        }).catch((err) => {
           console.log(err.message);
        })
    },[])
    async function hs() {
        await axios.put("http://localhost:8088/api/v1/employee/edit/" + ob,{
            employeeid: employeeid,
            employeefname: employeefname,
            employeelname: employeelname,
            mobile: mobile,
            email: email,
            pass: pass,
            dept: dept,
            desig: desig,
            dob: dob
        }).then((result) => {
            alert("Employee updated Successfully");
        }).catch(() => {
            alert("Employee not updated");
        })
    }
    return (
        <div>
        <Navbar>
          <Nav>
            <Button className='btn' style={{"color":"blue"}}><Link to="/Dashboard"  className="ln">Home</Link></Button>
          </Nav>
        </Navbar>
        <html style={{"paddingTop":"0px"}}>
        <head>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="AddUser.css"/>
        </head>
        <body><div className='au'>
        <div style={{height:"100vh",alignItems:"center",display:"flex",width:"200vh"}}>
        {/* <div className="au"> */}
      <form className="bu" class="w3-text-blue w3-light-grey w3-margin" style={{padding:"40px"}}>
          <h2 class="w3-center">Update Employee</h2>
          <div class="w3-row w3-section">
            <div class="w3-rest">
              <i class="xxlarge fa fa-id-card" style={{width:"20px"}}></i>
              <input class="w3-border" name="id" type="text" placeholder='Employee id' value={employeeid}
                onChange={(event) =>
                  {
                    setId(event.target.value);      
                  }} readOnly/>
            </div>
          </div>
          <div class="w3-row w3-section">
            <div class="w3-rest">
              <i class="xxlarge fa fa-user" style={{width:"20px"}}></i>
              <input class="w3-border" name="first" type="text" placeholder='First Name' value={employeefname}
                onChange={(event) =>
                  {
                    setFName(event.target.value);      
                  }}/>
            </div>
          </div>
          <div class="w3-row w3-section">
            <div class="w3-rest">
              <i class="xxlarge fa fa-user" style={{width:"20px"}}></i>
              <input class="w3-border" name="last" type="text" placeholder='Last Name' value={employeelname}
                onChange={(event) =>
                  {
                    setLName(event.target.value);      
                  }}/>
            </div>
          </div>
          <div class="w3-row w3-section">
            <div class="w3-rest">
              <i class="xxlarge fa fa-phone" style={{width:"20px"}}></i>
              <input class="w3-border" name="mobile" type="text" placeholder='Phone No.' value={mobile}
                onChange={(event) =>
                  {
                    setMobile(event.target.value);      
                  }}/>
            </div>
          </div>
          <div class="w3-row w3-section">
            <div class="w3-rest">
              <i class="xxlarge fa fa-envelope-o" style={{width:"20px"}}></i>
              <input class="w3-border" name="last" type="text" placeholder='Email' value={email}
                onChange={(event) =>
                  {
                    setEmail(event.target.value);      
                  }}/>
            </div>
          </div>
          <div class="w3-row w3-section">
            <div class="w3-rest">
              <i class="xxlarge fa fa-calendar" style={{width:"20px"}}></i>
              <input class="w3-border" name="designation" type="password" placeholder='Password' value={pass}
                onChange={(event) =>
                  {
                    setPass(event.target.value);      
                  }}/>
            </div>
          </div>
          <div class="w3-row w3-section">
            <div class="w3-rest">
              <i class="xxlarge fa fa-building-o" style={{width:"20px"}}></i>
              <input class="w3-border" name="dept" type="text" placeholder='Department'value={dept}
                onChange={(event) =>
                  {
                    setDept(event.target.value);      
                  }}/>
            </div>
          </div>
          <div class="w3-row w3-section">
            <div class="w3-rest">
              <i class="xxlarge fa fa-calendar" style={{width:"20px"}}></i>
              <input class="w3-border" name="designation" type="date" placeholder='Date of joining' value={dob}
                onChange={(event) =>
                  {
                    setDob(event.target.value);      
                  }}/>
            </div>
          </div>
          <button class="w3-button w3-block w3-ripple w3-padding w3-blue" style={{marginBottom :"20px"}} onClick={hs}>Update</button>
      </form>
      </div>
      </div>
        </body>
      </html>
      </div>
    )
}

