import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import '../App.css';


export function AddEmployee(){

    const navigate = useNavigate();
    function Navback(){
        navigate('/',{replace: true})
    }

    const[inputField,setInputField] = useState({
        fName: '',
        lName: '',
        mail: ''
    })
    


    const inputsHandler = (event) =>{
        const Evalue = event.target.value
        setInputField({ ...inputField,[event.target.name]: Evalue} )
        
        }
        const submitButton = () =>{
            axios.post(`http://localhost:8071/employee`,
            {
                firstName: inputField.fName,
                lastName: inputField.lName,
                emailID: inputField.mail
            }).then(res => {
                console.log(res)
                alert("Add complete")
                Navback()
                
            }).catch((err)=>
            console.log(err),
            )   
        }
    return(
        <div className='FormCSS'>
            <h1>Add Employee</h1>
            <Form >
                        <Form.Group className='FormGroups'>
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                        type={"text"}
                        name="fName"
                        value={inputField.fName}
                        onChange={inputsHandler}/>
                        </Form.Group>
                        <Form.Group className='FormGroups'>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                        type={"text"}
                        name="lName"
                        onChange={inputsHandler} 
                        value={inputField.lName}
                        />
                        </Form.Group>
                        <Form.Group className='FormGroups'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        type={"text"}
                        name="mail"
                        onChange={inputsHandler}
                        value={inputField.mail}/>
                        </Form.Group> 
                        <br/>
                        <Button onClick={submitButton}>Add</Button>
                    </Form>
                    
            

            
          
                



        </div>
    )
}