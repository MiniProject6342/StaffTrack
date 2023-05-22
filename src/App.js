//import logo from './logo.svg';
import './App.css';
//import {BrowserRouter as Router,Route,Routes, Link} from 'react-router-dom';
//mport Dashboard from './components/Dashboard';
 //import AddUser from './components/dup';
 //import Employee from './components/Employee'
//import UpdateEmployee from './components/UpdateEmployee';
import Main from './components/Main';
//import Home from './components/Home';
//import Whether from './components/Whether';
function App() {
      return(
        // <Router>
        //   <nav>
        //     <ul>
        //       <li><Link to="/dashboard">Dashboard</Link></li>
        //     </ul>
        //   </nav>
        //   <Routes>
        //     <Route path="/" element={<Employee/>}></Route>
        //     <Route path='/dashboard' element={<Dashboard/>}/>
        //     <Route path='/update/:id' element={<UpdateEmployee/>}/>
        //   </Routes>
        //   {/* <Dashboard/> */}
        // </Router>
        //  <Home/>
        <Main/>
      );
}
export default App;
