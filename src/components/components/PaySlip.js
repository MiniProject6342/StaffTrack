import React, { useEffect, useState } from 'react';
import './PaySlip.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
function PaySlip() {
  const [email, setEmail] = useState('');
  const [empId, setId] = useState('');
  const [basicSalary, setBasicSalary] = useState();
  const [gs, setGs] = useState()
  const [hra, setHra] = useState()
  const [da, setDa] = useState()
  const [emp, setEmp] = useState('')
  const empemail = useParams();
  const navigate = useNavigate();
  const handleSubmit1 = async (event) => {
    navigate('/EmpDashboard/' + empemail.id);
  }
  axios.get("http://localhost:8088/viewSal/" + empemail.id).then(res => {
    setEmp(res.data)
    console.log(res.data)
    setEmail(empemail.id)
    setId(res.data.empId)
    setBasicSalary(res.data.basicSalary)
    setHra(res.data.hra)
    setDa(res.data.da)
    setGs(res.data.gs)
  })

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
              {/* <Button className='btn'><Link to="/Dashboard" className='ln'>Home</Link></Button> */}
              <Button className='btn'><Link className="ln" to='/'>Logout</Link></Button>
            </Nav>
          </Navbar>

              <div className="pay-slip">
                <h1><u><b>Pay Slip</b></u></h1>
                <div className="pay-slip-content">
                  <div>
                    <p className="llabel">Employee ID:</p>
                    <p>{empId}</p>
                  </div>
                  <br></br>
                  <div>
                    <p className="llabel">BasicSalary:</p>
                    <p>{basicSalary}</p>
                  </div>
                  <br></br>
                  <div>
                    <p className="llabel">Hra:</p>
                    <p>{hra}</p>
                  </div>
                  <br></br>
                  <div>
                    <p className="llabel">Da:</p>
                    <p>{da}</p>
                  </div>
                  <br></br>
                  <div>
                    <p className="llabel">Gross Salary:</p>
                    <p>{gs}</p>
                  </div>
                </div>
          </div>
        </body>
      </html>
    </div>
  );
};


export default PaySlip;