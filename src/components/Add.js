import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';




function Add() {
  const [id,setId]=useState('')
  const [empName,setName]=useState('')
  const [empAge,setAge]=useState('')
  const [empDesg,setDesg]=useState('')
  const [empSalary,setSalary]=useState(0)

  let location = useNavigate()

  useEffect(() => {
    setId(uuid().slice(0,3))
  }, [])
  

const handleAddEmployee =  async (e)=>{
  e.preventDefault();
  // console.log(empName);
  // console.log(empAge);
  // console.log(empDesg);
  // console.log(empSalary);
  setId(uuid().slice(0,3))
 

  const body={
    id,
    empName,
    empAge,
    empDesg,
    empSalary
  }
  console.log(body);
  //api call
  const result = await axios.post('http://localhost:8000/add-employee',body)
 alert(result.data.message);
 //redirect to admin
 location('/')

}


  return (
    <div>
      <div className='container-fluid mt-5'>
        <h1><i class="fa-solid fa-user-plus me-3"></i>Add New Employee</h1>
        <p style={{textAlign:'justify'}}>This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.</p>

      </div>
      <div className=' container mt-2 mb-2 border rounded'>
      <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Name" onChange={(e)=>setName(e.target.value)}/>
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAge">
        <Form.Label>Employee Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Age" onChange={(e)=>setAge(e.target.value)} />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDesg">
        <Form.Label>Employee Desgnation</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Desgnation" onChange={(e)=>setDesg(e.target.value)}/>
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formSalary">
        <Form.Label>Employee Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Salary" onChange={(e)=>setSalary(e.target.value)} />
      
      </Form.Group>
      <Button onClick={(e)=>handleAddEmployee(e)} variant="success" type="submit">
         Add
        </Button>


<Link to={'/'}>
  
        <Button className='ms-3' variant="warning" type="submit">
          Close
        </Button>
</Link>
    </Form>
      </div>
    </div>
  )
}

export default Add