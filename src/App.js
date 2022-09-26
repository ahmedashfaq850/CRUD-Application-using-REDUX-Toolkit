import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserList from './components/UserList'
import EditUser from './components/EditUser'
import AddUser from './components/AddUser'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList/>}/>
        <Route path='/add-user' element={<AddUser/>}/>
        <Route path='/edit-user/:id' element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App