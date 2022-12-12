//import logo from './logo.svg';
import './App.css';
import React from 'react';
import EmployeeList from './component/getEmployee';
import {Route, Routes} from 'react-router-dom'
import { EmployeeDetails } from './component/EmployeeDetail';
import { EmployeeUpdate } from './component/Update';
import { AddEmployee } from './component/addEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './component/Navibar';


function App() {

  return (
    <div >
      <NaviBar/><br/><br/><br/>
      
      <Routes>
        <Route path='/' element={<EmployeeList/>}/>
        <Route path='/details' element={<EmployeeDetails/>}/>
        <Route path='/update' element= {<EmployeeUpdate/>}/>
        <Route path='/add' element= {<AddEmployee/>}/>
      </Routes>

      {/* <EmpolyeeList/> */}

      
      
    </div>
  );
}

export default App;
