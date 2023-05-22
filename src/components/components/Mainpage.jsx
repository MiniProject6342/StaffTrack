import React from 'react'
import './HomeHeader.css';
import './Mainpage.css';
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import {Button} from "react-bootstrap";
import { Link } from 'react-router-dom';
export default function Mainpage() {
  return (
    <div  className='ll'>
    <html>
      <head>
        <link rel="stylesheet" href="Mainpage.css"/>
      </head>
      <body >
    <div className='ss'>
       <Navbar>
          <Nav >
            <Button><Link to='/' className="ln">Home</Link></Button>
            <Button><Link className="ln" to="/about">About Us</Link></Button>
            <Button className='btn'><Link className="ln" to="/Login">Employee Login</Link></Button>
            <Button className='btn'><Link className="ln" to="/ALogin">Admin Login</Link></Button>
          </Nav>
       </Navbar>
    </div>
    </body>
    </html>
    </div>
  )
}