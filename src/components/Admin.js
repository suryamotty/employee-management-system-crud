import React,{useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Admin() {

  const [allEmployees, setAllEmployees] = useState([])

  //fn for api call

  const fetchData = async()=>{
    const result =await axios.get('http://localhost:8000/get-all-employees')
    setAllEmployees(result.data.employees)
  }
  console.log(allEmployees);
  useEffect(() => {
    fetchData()
  }, [])
  
  //handleDelete
  const handleDelete = async (id)=>{
    const result = axios.delete('http://localhost:8000/delete-employee/'+id)
    alert((await result).data.message);
    fetchData()
  }
  return (
    <div>
        
        <div className='container-fluid mt-5'>
            <h1><i class="fa-solid fa-user-group"></i> Employee Management App  
           <Link to={'/add'}> <a className='btn btn-success ms-5'><i class="fa-solid fa-user-plus"></i>Add Employee</a> </Link> 
           </h1>

            <p  className='mt-3' style={{textAlign:'justify'}}>This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.This is dummy data.</p>
        </div> 
        <div className='container mt-2 mb-2'>
            <h1 className='text-primary mb-5'>Employee Details</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th> Name</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
       { 
       allEmployees?.map((item,index)=>(
        <tr>
        <td>{index+1}</td>
        <td>{item.id}</td>
        <td>{item.uname}</td>
        <td>{item.age}</td>
        <td>{item.desg}</td>
        <td>{item.salary}</td>
        <td>
         <Link to={'edit/'+item.id}> <button className='btn btn-warning'><i class="fa-solid fa-pen"></i></button></Link>
          
          <button onClick={()=>handleDelete(item.id)} className='btn btn-danger ms-3'><i class="fa-solid fa-trash"></i></button>
        </td>
      </tr>
       ))
      }
       
       
      </tbody>
    </Table>
        </div>
    </div>
  )
}

export default Admin