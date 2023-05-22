import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
export default function ALogin() {
  const [email, setEmail] = useState("");
  const [pass,setPass]=useState("");
  const navigate=useNavigate();
  const handleLogin=async(event)=>{
    event.preventDefault();
    if(email===""|| pass==="")
        alert('enter complete details')
     else{
            navigate('/Dashboard');
      }
  }
  return (
    <div>
      <html>
        <head>
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        </head>
        <body><div>
        <Navbar bg="secondary" expand="lg" variant="dark">
          <Nav className='me-auto'>
            <Button variant='light' className='btn'><Link className="ln" to='/'>Home</Link></Button>
            <Button variant='light' className='btn'><Link className="ln" to="/about">About Us</Link></Button>
            <Button variant='light' className='btn'><Link className="ln" to="/Login">Login</Link></Button>
          </Nav>
       </Navbar>
        <div style={{height:"100vh",alignItems:"center",display:"flex",width:"200vh",marginLeft:"600px"}}>
        {/* <div className="au"> */}
      <form className="bu" class="w3-text-blue w3-light-grey w3-margin" style={{padding:"40px"}}>
          <h2 class="w3-center">Login</h2>
          <div class="w3-row w3-section">
            <div class="w3-rest">
              <i class="xxlarge fa fa-envelope-o" style={{width:"20px"}}></i>
              <input class="w3-border"name="last" type="text" placeholder='Email' value={email}
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
          <button class="w3-button w3-block w3-ripple w3-padding w3-blue" style={{marginBottom :"20px"}} onClick={handleLogin}>login</button>
      </form>
      </div>
      </div>
        </body>
      </html>
    </div>
  )
}
