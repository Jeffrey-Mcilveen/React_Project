import React from 'react';
import axios from 'axios';
import { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import '../App.css';


export default class EmployeeList extends Component {

    constructor(props){
        super(props)
        this.state = {
            empolyee: []
            }
            this.handleClick = this.deleteEmployee.bind(this)
    }
    deleteEmployee(id){
        console.log(id)
       
        axios.delete(`http://localhost:8071/employee/${id}`)
        .then(res =>{
            console.log(res)
            alert("Delete successful")
            this.GetEmployees()
        }).catch((err) => {
            console.log(err)
        })
    }

    GetEmployees(){
        axios.get(`http://localhost:8071/employees`)
        .then(res => {
            const empolyee = res.data;
            console.log(empolyee)
            this.setState({ empolyee: empolyee});
        }).catch((err) =>{
            console.log(err)
        })
    }
    componentDidMount() {
        this.GetEmployees()

    }
    render() {    
        return (
        <div className='tableCSS'>
            <h2 className='App'>Employee Management App</h2>
            <h4 className='App'>List of Employees</h4>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.state.empolyee.map(empolyee=>(
                    <Fragment key= {empolyee._id}>
                       
                        <tr>
                            <td>{empolyee.firstName}</td>
                            <td>{empolyee.lastName}</td>
                            <td>{empolyee.emailID}</td>
                            <td><Link to= '/details' state={{
                                ID: empolyee._id,
                                fName: empolyee.firstName,
                                lName: empolyee.lastName,
                                mail: empolyee.emailID
                                }}><Button style={{marginRight: '5px'}} variant='success'>Details</Button></Link>
                                 <Button style={{marginRight: '5px'}} variant='danger' onClick={() => this.handleClick(empolyee._id)}>Delete</Button>  
                                 <Link to="/update" state={{
                                    idupdate: empolyee._id,
                                    fNameUpdate: empolyee.firstName,
                                    lNameUpdate: empolyee.lastName,
                                    emailUpdate: empolyee.emailID
                                    }}><Button variant='primary'>Update</Button> </Link>
                                  </td>
                                
                        </tr>
                    </Fragment> 
                ))}
                </tbody>

            </Table>

            

            <ul>
                {/* { this.state.empolyee.map(empolyee => (
                    <Fragment key={empolyee._id}>
                <li>{empolyee.firstName} {empolyee.lastName} <br/>

                <Link to= '/details' state={{
                    ID: empolyee._id,
                    fName: empolyee.firstName,
                    lName: empolyee.lastName,
                    mail: empolyee.emailID
                }}>View</Link> <button onClick={() => this.handleClick(empolyee._id)}>Delete</button>
                 </li>
                </Fragment>
                ))
                
                } */}
                </ul>
                </div>
                )
            }
        }
