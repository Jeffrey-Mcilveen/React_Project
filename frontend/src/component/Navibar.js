import React,{Component} from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default class NaviBar extends Component{
    render(){
        return(
            <div>
                <Navbar bg='dark' variant='dark' fixed='top'>
                <Nav>
                        <Nav.Link href='/'>Employee Management App</Nav.Link>
                        <Nav.Link href='/add'>Add Employee</Nav.Link>
                </Nav>
                </Navbar>
                
               
            </div>
        )
    }
}