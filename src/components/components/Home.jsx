import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Dashboard from './Dashboard';
 import Employee from './Employee'
import UpdateEmployee from './UpdateEmployee';
import HomeHeader from './HomeHeader';
export default function Home() {
  return (
    <div>
      <Router>
          <HomeHeader></HomeHeader>
          <Routes>
            <Route path="/employee" element={<Employee/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
            <Route path='/update/:id' element={<UpdateEmployee/>}></Route>
          </Routes>
          {/* <Dashboard/> */}
        </Router>
        </div>
  )
}
