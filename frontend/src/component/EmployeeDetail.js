import React,{useState} from 'react';
import axios from 'axios';
import { useLocation,Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';




export  function EmployeeDetails(){
    const location = useLocation();
    const states = location.state;
    console.log(states)
    return(
        <div className='DetailsCSS'>
             <h2>Details</h2>
            <ListGroup >
                <ListGroup.Item><p>ID : <b>{states.ID}</b></p></ListGroup.Item>
                <ListGroup.Item><p>FirstName : <b>{states.fName}</b></p></ListGroup.Item>
                <ListGroup.Item><p>LastName : <b>{states.lName}</b></p></ListGroup.Item>
                <ListGroup.Item><p>Email Address : <b>{states.mail}</b></p></ListGroup.Item>
            </ListGroup>
        </div>
    )
}