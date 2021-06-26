import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
function EditUser() {
    let history = useHistory();
    const {id} = useParams();
    const [user, setUser] = useState({
        name:'',
        email:'',
        username:'',
        phone:'',
        website:''
    })
    const { name, username, email, phone, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    history.push('/');
  }

  const LoadUser = async() => {
    const result = await axios.get(`http://localhost:3003/users/${id}`)
    console.log(result);
    setUser(result.data);
  }

  useEffect(() => {
    LoadUser();
    
  },[])
    return (
        <div className="container my-3" >
            <h2>Edit User</h2>
            <form onSubmit={e=>onSubmit(e)}>
            <div className="form-group mb-1">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
                />
            </div>
            <div className="form-group mb-1">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Email"
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
                />
            </div>
            <div className="form-group mb-1">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="username"
                value={username}
                onChange={e => onInputChange(e)}
                />
            </div>
            <div className="form-group mb-1">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone"
                name="phone"
                value={phone}
                onChange={e => onInputChange(e)}
                />
            </div>
            <div className="form-group mb-1">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your website"
                name="website"
                value={website}
                onChange={e => onInputChange(e)}
                />
            </div>
            <button className="btn btn-primary btn-block">Update User</button>
          </form>
        </div>
    )
}

export default EditUser
