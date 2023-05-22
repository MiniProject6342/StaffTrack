import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import {Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
export default function AboutUs() {
  return (
    <div>
       <Navbar>
          <Nav >
            <Button><Link to='/' className="ln">Home</Link></Button>
            <Button><Link className="ln" to="/about">About Us</Link></Button>
            <Button className='btn'><Link className="ln" to="/Login">Employee Login</Link></Button>
            <Button className='btn'><Link className="ln" to="/ALogin">Admin Login</Link></Button>
          </Nav>
       </Navbar>
       <div style={{"fontSize":"20px","text-align":"center","padding":"120px"}}>
       {/* <h1 style={{"paddingLeft":"500px","paddingTop":"250px"}}>EMPLOYEE MANAGEMENT SYSTEM</h1> */}
       <i >A well planned systemstically executed industrial trasing helps a great deal in inculcating a good works culture. Employee Management system is an application that enables users to create and store Employee Records. It also helps to maintain the data of existing employees. This application is helpful to department of the organization which maintains data of employees related to an organization.
It is simple to understand and can be used by anyone who is not even familiar with simple employees system. It is user friendly and just asks the user to follow step by step operations by giving him few options. It is fast and can perform many operations of a company.
This software package has been developed using the powerful tools of React and Spring Boot using MongoDB as the back end .The software is very user friendly. The package contains different modules like Employee and Admin dashboard with the facility for the employee to apply leaves and view salaries .</i>
    </div>
    </div>
  )
}
