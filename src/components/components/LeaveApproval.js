import React from 'react';
import axios from 'axios';
import './LeaveApproval.css'
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import EmpService from "../Services/EmpService";

class LeaveApproval extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      leaves: []
    }
    this.handleApprove = this.handleApprove.bind(this);
    this.handleReject = this.handleReject.bind(this);
  }

  handleApprove(cid, st) {
    if (st === 'pending') {
      EmpService.ChangeApprove(cid).then((res) => {

        console.log("staus changed to approve");
        // this.setState({voted:true})
        //this.props.navigate('./Logout.jsx');

      });
    }
    else {
      alert("status is already set to " + st);
    }
  }
  handleReject(cid, st) {
    if (st === 'pending') {
      EmpService.ChangeReject(cid).then((res) => {
        console.log("staus changed to reject");

      });
    }
    else {
      alert("status is already set to " + st);
    }
  }
  componentDidMount() {
    const result = axios.get("http://localhost:8088/api/leaves/get")
      .then(result => {
        this.setState({ leaves: result.data })
        console.log(result.data)
      })
  }
  // /fetchLeaves();
  render() {

    return (
      <div>
        <Navbar bg="secondary" expand="lg" variant="dark">
          <Nav className='me-auto'>
            <Button className='btn'><Link to="/Dashboard" className="ln">Home</Link></Button>
            <Button className='btn'><Link to="/employee" className="ln">Add Employee</Link></Button>
            <Button className='btn'><Link className="ln" to='/'>Logout</Link></Button>
          </Nav>
        </Navbar>

        <table className='ttable'>
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
            {
              this.state.leaves.map((leave) => {
                return (
                  <tr>
                    <td>{leave.empid}</td>
                    <td>{leave.startDate}</td>
                    <td>{leave.endDate}</td>
                    <td>{leave.reason}</td>
                    <td> <button onClick={() => this.handleApprove(leave.empid, leave.status)}>Approve</button>
                      <button onClick={() => this.handleReject(leave.empid, leave.status)}>Reject</button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default LeaveApproval;