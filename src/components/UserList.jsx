import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import  { deleteUser }  from '../redux/UserSlice'


const UserList = () => {
  const data = useSelector(state => state.users);
  const dispatch = useDispatch()


  const handleDeleteUser = (id) =>{
    dispatch(deleteUser({ id }))
  }


  return (
    <div className="main-container">
      <div className="UserList">
        <h2 className="heading">Redux ToolKit CRUD Application</h2>
        <Link to="/add-user">
          <Button>Add User</Button>
        </Link>
      </div>
      <div className="center-grid">
        <div className="grid-container">
          {data.map((item) => (
            <div className="grid-item" key={item.id}>
              <div className="flex-container">
                <div className="text">
                  <p className="name">{item.name}</p>
                  <p className="email">{item.email}</p>
                </div>
                <div className="icons">
                  <Link to={`edit-user/${item.id}`}>
                    <span title="edit" className="gap">
                      <MdOutlineModeEditOutline
                        size={20}
                        style={{
                          color: "black",
                        }}
                      />
                    </span>
                  </Link>
                  <span title="delete" className="gap">
                    <MdDeleteOutline onClick={()=>handleDeleteUser(item.id)}
                      size={20}
                      style={{
                        color: "black",
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
