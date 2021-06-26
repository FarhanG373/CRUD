import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

const ViewUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState({
        name:'',
        email:'',
        username:'',
        phone:'',
        website:''
    })
    const LoadUser = async() => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        console.log(result);
        setUser(result.data);
      }
      useEffect(() => {
        LoadUser();
        
      },[])
      const {name, email, username, phone, website} = user;
    return (
       
        <div className="container my-3" >
             <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group">
        <li className="list-group-item"><b>Name:</b> {name}</li>
        <li className="list-group-item"><b>Username:</b> {username}</li>
        <li className="list-group-item"><b>Email:</b> {email}</li>
        <li className="list-group-item"><b>Phone:</b> {phone}</li>
        <li className="list-group-item"><b>Website:</b> {website}</li>
      </ul>
        </div>
    )
}

export default ViewUser
