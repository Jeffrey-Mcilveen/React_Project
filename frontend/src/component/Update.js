import React,{Component, useState} from 'react';
import axios from 'axios';
import { useLocation,useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import '../App.css';


    export function EmployeeUpdate(){
        const location = useLocation();
        const states = location.state;
        console.log(states)
        const navigate = useNavigate();
        function Navback(){
            navigate('/',{replace: true})
        }

        const[inputField,setInputField] = useState({
            fName: '',
            lName: '',
            mail: '',
        })

        const inputsHandler = (event) =>{
            const Evalue = event.target.value
            setInputField({ ...inputField,[event.target.name]: Evalue} )
            
            }
            const submitButton = () =>{
                axios.patch(`http://localhost:8071/employee/${states.idupdate}`,
                {
                    firstName: inputField.fName,
                    lastName: inputField.lName,
                    emailID: inputField.mail
                } ).then(res => {
                    console.log(res)
                    alert("Update complete")
                    Navback()
                    
                }).catch((err)=>
                console.log(err),
                //alert('ERROR')
                )
            }
            return(
                <div className='FormCSS'>
                    <h1>Update</h1>
                    <Form>
                        <Form.Group className='FormGroups'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                        type={"text"}
                        name="fName"
                         placeholder={states.fNameUpdate}
                         value={inputField.fName}
                         onChange={inputsHandler}/>
                        </Form.Group>
                        <Form.Group className='FormGroups'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                        type={"text"}
                        name="lName"
                        onChange={inputsHandler}
                        placeholder= {states.lNameUpdate}
                        value={inputField.lName}
                        />
                        </Form.Group>
                        <Form.Group className='FormGroups'>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                        type={"text"}
                        name="mail"
                        onChange={inputsHandler}
                        placeholder={states.emailUpdate}
                        value={inputField.mail}/>
                        </Form.Group>
                    
                        <br/>
                        <Button onClick={submitButton}>Update</Button>
                    </Form>
                    <br/>
                
            


            </div>
            )
       
            

    }