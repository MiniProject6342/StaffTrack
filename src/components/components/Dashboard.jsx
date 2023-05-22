import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import {Button } from "react-bootstrap";
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './dashBoard1.css';
export default function Dashboard() {
  const [employees, setUsers] = useState([]);
  const navigate = useNavigate();
  const handleSubmit1 = async (event) => {
    navigate('/Dashboard');
  }
  const handleSubmit2 = async (event) => {
    navigate('/la');
  }
  try{
  useEffect(() => {
    (async () => await Load())();
  }, []);
  }catch(err){
    alert('no')
  }
  async function Load() {
    const result = await axios.get(
      "http://localhost:8088/api/v1/employee/getall");
    setUsers(result.data);
    console.log(result.data);
  }
  // Load();

  async function DeleteEmployee(eid) {
    await axios.delete("http://localhost:8088/api/v1/employee/delete/" + eid);
    alert("Employee deleted Successfully");
    // Load();
  }
   async function editEmployee(em) {
    navigate('/Update/'+em);
   }
  return (
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
          <div className="container-fluid" style={{ "marginTop": "0px" }}>
            <div className="row content" style={{ "height": "700px" }}>
              <div className="col-sm-2 sidenav" style={{
                "height": "100%",
                "backgroundColor": "#555",
                "color": "white",
                "padding": " 15px"
              }}>
                <h4>Admin</h4>
                <ul className="nav nav-pills nav-stacked">
                  <li className="active" onClick={handleSubmit1}><a href="#section1">DashBoard</a></li>
                  <li onClick={handleSubmit2}><a href="#AddUser">Leaves</a></li>
                  <li><Link to="/display">Salary Details</Link></li>
                </ul>
              </div>

              <div className="col-sm-10">
                <table className="table table-dark" align="center">
                  <thead>
                    <tr>
                      <th scope='col'>Employee Id</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Mobile No.</th>
                      <th scope='col'>Email</th>
                      <th scope='col'>Department</th>
                     
                      <th scope='col'>Date of joining</th>
                      <th scope="col">Option</th>
                    </tr>
                  </thead>
                  {employees.map(function fn(employee) {
                    return (
                      <tbody>
                        <tr>
                          <td>{employee.employeeid}</td>
                          <td>{employee.employeefname}</td>
                          <td>{employee.employeelname}</td>
                          <td>{employee.mobile}</td>
                          <td>{employee.email}</td>
                          <td>{employee.dept}</td>
              
                          <td>{employee.dob}</td>
                          <td>
                            <button type="button" class="btn btn-warning"  onClick={() => editEmployee(employee.email)} >Update</button>   
                            <button type="button" class="btn btn-danger" onClick={() => DeleteEmployee(employee._id)}>Delete</button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
                <div className='gi'></div>
              </div>
            </div>
          </div>
        </body>
      </html>
  )
}
