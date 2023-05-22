import React from 'react'
import './HomeHeader.css';
import { Link } from 'react-router-dom';
export default function HomeHeader() {
  return (
    <div  className='nav2'>
       <Link to="/dashboard/">Home</Link>
       <Link to="/employee">Add Employee</Link>
    </div>
  )
}
