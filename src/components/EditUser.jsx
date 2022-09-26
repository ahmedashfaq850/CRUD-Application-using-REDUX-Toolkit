import React from 'react'
import TextField from './TextField'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from './Button'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { editUser } from '../redux/UserSlice';
const EditUser = () => {

  const navigate = useNavigate();
  const params = useParams();
  const disptach = useDispatch();
  const users = useSelector(state => state.users)
  const existingUser = users.filter(user => user.id === params.id)
  //const {name,email} = existingUser
  const name = existingUser[0].name
  const email = existingUser[0].email

  const [values, setValues] = useState({
    name,
    email
  });

  const HandleUpdateuser = () =>{
    setValues({name: '', email: ''})
    disptach(editUser({
      id: params.id,
      name: values.name,
      email: values.email
    }))
    navigate('/')
  }


  return (
    <div className='Add-user-container'>
    
      <div className='center'>
      <h2 className="heading">Redux ToolKit CRUD Application</h2>
      <h3>Update Form</h3>
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
      <Button onClick={HandleUpdateuser}>Update</Button>
    </div>
    </div>
  )
}

export default EditUser