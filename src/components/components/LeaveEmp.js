import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Leave.css'
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './dashBoard1.css';

function LeaveEmp() {
  const [leaves, setLeaves] = useState([]);
  const [empid, setEmpId] = useState('');
  const [reason, setReason] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('pending');
  let empemail = useParams();
  const[noofdays,setNoOfDays]=useState('');
  const[available,setAvailable]=useState('15');
  const[availed,setAvailed]=useState('0');
  const navigate = useNavigate();
  const handleSubmit1 = async (event) => {
    navigate('/EmpDashboard/' + empemail.id);
  }
  const handleSubmit2 = async (event) => {
    navigate('/leave/' + empemail.id);
  }
  const handleSubmit4=async(event)=>{
    navigate('/cst/'+empemail.id);
  }
  const handleSubmit3=async(event)=>{
    navigate('/payslip/'+empemail.id);
  }
  useEffect(() => {
    fetchLeaves();
  }, []);
  async function Load() {
    console.log(empemail)
    const result=await axios.get("http://localhost:8088/api/v1/employee/login/"+empemail.id)
    console.log(result.data);
    setEmpId(result.data.employeeid);
  }
  Load();
  const fetchLeaves = async () => {
    try {
      const response = await axios.get('http://localhost:8088/api/v1/leaves/getall');
      setLeaves(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const submitLeave = async (e) => {
    e.preventDefault();
    var date1 = new Date(startDate);  
    var date2 = new Date(endDate);  
    var time_difference = date2.getTime() - date1.getTime();     
    var res= (time_difference / (1000 * 60 * 60 * 24));   
    setNoOfDays(res);
    try {
      await axios.post('http://localhost:8088/api/v1/leaves/save', {
        empid,
        reason,
        startDate,
        endDate,
        available,
        availed,
        noofdays,
        status,
      });
      alert("leave applied");
      setEmpId('');
      setReason('');
      setStartDate('');
      setEndDate('');
      setStatus('Pending');
      fetchLeaves();
    } catch (error) {
      console.error(error);
    }
  };

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
              <Button className='btn'><Link className="ln" to='/'>Logout</Link></Button>
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
                  <li onClick={handleSubmit1}><a href="#sec">DashBoard</a></li>
                  <li class="active" onClick={handleSubmit2}><Link to="/leave">Apply Leave</Link></li>
                  <li  onClick={handleSubmit4}><Link to="/cst">Leave History</Link></li>
                <li onClick={handleSubmit3}><Link to='/payslip'>Salary</Link></li>
                </ul>
              </div>
              <div className='leave-application'>
                <h1>Leave Application</h1>
                <form>
                  <label>
                    Reason:
                    </label>
                    <input
                      type="text"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                    />
                  {/* </label> */}
                  <br />
                  <label>
                    Start Date:
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  {/* </label> */}
                  <br />
                  <label>
                    End Date:
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  {/* </label> */}
                  <br />
                  <label>
                    Status:
                    </label>
                    <input
                      type="text"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    />
                  {/* </label> */}
                  <br />
                  <button onClick={submitLeave}>Submit</button>
                </form>

              </div>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
}

export default LeaveEmp;
