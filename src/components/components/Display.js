import {  useEffect, useState } from "react"
import axios from "axios"
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import {Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
function Display() {
    const [email, setEmail] = useState('');
    const [basicSalary, setBasicSalary] = useState(0.0);
    const [designation, setDesignation] = useState('');
    const [gs, setGs] = useState(0.0)
    const [hra, setHra] = useState(0.0)
    const [empId, setempId] = useState()
    const [da, setDa] = useState(0.0)
    const [salaries, setSalaries] = useState([]);
    const navigate = useNavigate();
    const handleSubmit1 = async (event) => {
        navigate('/Dashboard');
    }
    try {
        useEffect(() => {
            (async () => await Load())();
        }, [])
        async function Load() {
            const res = await axios.get('http://localhost:8088/viewSal').then(res => {
                setSalaries(res.data)
                console.log(res.data)
            })
            Load()
        }
    } catch (err) {

    }
    // Load();
    const handleAdd = (e) => {
        e.preventDefault()

        const emp = { email, empId, designation, basicSalary, hra, da, gs }

        axios.post('http://localhost:8088/employeeSalary', emp).then(res => {
            console.log(res.data)
        })
    }
    const handleSubmit2 = async (event) => {
        navigate('/la');
      }

    return (
        <div>
            <html>
                <head>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
                    
                </head>
                <body>
                    <Navbar bg="secondary" expand="lg" variant="dark">
                        <Nav className='me-auto'>
                            <Button className='btn'><Link to="/Dashboard" className="ln">Home</Link></Button>
                            <Button className='btn'><Link to="/employee" className="ln">Add Employee</Link></Button>
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
                                <h4>Admin</h4>
                                <ul class="nav nav-pills nav-stacked">
                                    <li onClick={handleSubmit1}><a href="#sec">DashBoard</a></li>
                                    <li><a onClick={handleSubmit2} href="#AddUser">Leaves</a></li>
                                    <li class="active"><Link to="/display">Salary Details</Link></li>
                                </ul>
                            </div>
                            <h1>EMPLOYEE SALARY DETAILS</h1>
                    <form style={{"paddin":"50px","marginLeft":"20px"}}>
                        <label>
                            <h3> EMAIL:</h3>
                            <input type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                        </label><br></br>
                        <label><h3>EMPLOYEE ID:</h3>
                            <input type="text" value={empId} onChange={(event) => { setempId(event.target.value) }} />
                        </label>
                            <br></br>
                        <label><h3>Designation:</h3>
                            <input type="text" value={designation} onChange={(event) => { setDesignation(event.target.value) }} />
                        </label><br></br>
                        <button onClick={handleAdd}>View Salary </button>
                    </form>

                    <table style={{"border":"2px solid","width":"25cm","height":"6cm"}} align="center">

                        <thead style={{"border":"2px solid","backgroundColor":"whitesmoke"}}>
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">Employee ID</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Basic Salary</th>
                                <th scope="col">HRA</th>
                                <th scope="col">DA</th>
                                <th scope="col">Gross Salary</th>
                            </tr>
                        </thead>
                        {salaries.map(function fn(emp) {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{emp.email}</td>
                                        <td>{emp.empId}</td>
                                        <td>{emp.designation}</td>
                                        <td>{emp.basicSalary}</td>
                                        <td>{emp.hra}</td>
                                        <td>{emp.da}</td>
                                        <td>{emp.gs}</td>
                                    </tr>
                                </tbody>
                            );
                        })}
                    </table>
                    </div>
                    </div>
                </body>

            </html>
        </div>
    );
}

export default Display;