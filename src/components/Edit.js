import React, {useState,useEffect}from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useParams,useNavigate  } from 'react-router-dom';


function Edit() {

  const [id,setId]=useState('')
  const [empName,setName]=useState('')
  const [empAge,setAge]=useState('')
  const [empDesg,setDesg]=useState('')
  const [empSalary,setSalary]=useState(0)

  let location = useNavigate()

//get path parameter from url
  const params= useParams()
  console.log(params.id);

  //api call to get details of a particular employee from server  -  get-an-employee

  const fetchEmployee = async ()=>{
    const result =  await axios.get('http://localhost:8000/get-an-employee/'+params.id)
    setId(result.data.employee.id);
    setName(result.data.employee.uname);
    setAge(result.data.employee.age);
    setDesg(result.data.employee.desg);
    setSalary(result.data.employee.salary);
   
  }
  // console.log(id);
  // console.log(empName);
  // console.log(empAge);
  // console.log(empDesg);
  // console.log(empSalary);

  const handleUpdate = async (e)=>{
    e.preventDefault()
    //create body to share with backend
    const body={
      id,
      empName,
      empAge,
      empDesg,
      empSalary
    }
    //api call-post
    const result = await axios.post('http://localhost:8000/update-employee',body)
    alert(result.data.message)
    location('/')
  }

  useEffect(() => {
    fetchEmployee()
  }, [])
  


  return (
    <div>
    <div className='container-fluid mt-5'>
        <h1><i class="fa-solid fa-user-pen me-3"></i>Upadate Employee Form</h1>
        <p style={{textAlign:'justify'}}>This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.This is some dummy data.</p>

      </div>
      <div className=' container mt-2 mb-2 border rounded'>
      <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Name" value={empName}  onChange={(e)=>setName(e.target.value)}/>
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAge">
        <Form.Label>Employee Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Age" value={empAge} onChange={(e)=>setAge(e.target.value)}/>
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDesg">
        <Form.Label>Employee Desgnation</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Desgnation" value={empDesg} onChange={(e)=>setDesg(e.target.value)}/>
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formSalary">
        <Form.Label>Employee Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Salary" value={empSalary} onChange={(e)=>setSalary(e.target.value)} />
      
      </Form.Group>
      <Button onClick={(e)=>handleUpdate(e)} variant="success" type="submit">
       Update
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

export default Edit