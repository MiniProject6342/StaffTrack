import React, { useState } from 'react';
import axios from 'axios';
import './CheckStatus.css'
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './dashBoard1.css';
const CheckStatus = () => {
    const [empid, setEmpid] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reason, setReason] = useState('');
    const [status, setStatus] = useState('');
    let empemail = useParams();
    const navigate = useNavigate();
    const handleSubmit1 = async (event) => {
        navigate('/EmpDashboard/' + empemail.id);
    }
    const handleSubmit2 = async (event) => {
        navigate('/leave/' + empemail.id);
    }
    const handleSubmit4 = async (event) => {
        navigate('/cst/' + empemail.id);
    }
    const handleSubmit3 = async (event) => {
        navigate('/payslip/' + empemail.id);
    }
    async function Load() {
        console.log(empemail)
        const result=await axios.get("http://localhost:8088/api/v1/employee/login/"+empemail.id)
        console.log(result.data);
        setEmpid(result.data.employeeid);
    }
    Load();
    async function checkLeaves() {
        try {
            const result = await axios.get('http://localhost:8088/api/leaves/getc/' + empid)
            console.log(result.data)
            setStartDate(result.data.startDate);
            setEndDate(result.data.endDate);
            setReason(result.data.reason);
            setStatus(result.data.status);
        }
        catch (err) {

        }
    }
    checkLeaves()

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
                                    <li onClick={handleSubmit2}><Link to="/leave">Apply Leave</Link></li>
                                    <li class="active" onClick={handleSubmit4}><Link to="/cst">Leave History</Link></li>
                                    <li onClick={handleSubmit3}><Link to='/payslip'>Salary</Link></li>
                                </ul>
                            </div>

                            {/* <form className='frm'>
                                Empid:<input type='text' value={empid} onChange={(event) => setEmpid(event.target.value)}></input><br></br>
                            </form> */}
                            <h2 align="center">Your Leave History</h2>
                            <table className='tt'>

                                <thead>
                                    <tr>
                                        <th scope='col'>Employee Id</th>
                                        <th scope="col">Start Date</th>
                                        <th scope="col">End date</th>
                                        <th scope='col'>Reason</th>
                                        <th scope='col'>Status</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>{empid}</td>
                                        <td>{startDate}</td>
                                        <td>{endDate}</td>
                                        <td>{reason}</td>
                                        <td> {status}
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                       </div>
                    </div>
                </body>
            </html>

        </div>
    )

}
export default CheckStatus;