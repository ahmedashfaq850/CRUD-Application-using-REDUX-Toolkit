import React from 'react'
import TextField from './TextField'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from './Button'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/UserSlice';
import { v4 as uuidv4 } from 'uuid';
const AddUser = () => {

  const [values, setValues] = useState({
    name: '',
    email:''
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();


  const HandleAdduser = () =>{
    setValues({
      name:'',
      email:''
    });
    dispatch(addUser({
      id:uuidv4(),
      name:values.name,
      email: values.email
    }))
    navigate('/')
  }

  return (
    <div className='Add-user-container'>
    
      <div className='center'>
      <h2 className="heading">Redux ToolKit CRUD Application</h2>
      <h3>Add Form</h3>
      <TextField
        label="Name:"
        inputProps={{type: 'text', placeholder: 'Enter your name'}}
        onChange={(e)=> setValues({...values, name: e.target.value})}
        value={values.name}
      />
      <br/>
      <TextField
      label="Email:"
      inputProps={{type: 'email', placeholder:'Enter you email'}}
      onChange={(e)=> setValues({...values, email: e.target.value})}
      value={values.email}
      />
      <br/>
      <Button onClick={HandleAdduser}>Submit</Button>
    </div>
    </div>
  )
}

export default AddUser