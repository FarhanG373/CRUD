import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        LoadUsers();
    },[]);


    const LoadUsers = async() => {
        const result = await axios.get('http://localhost:3003/users')
        setUsers(result.data.reverse())
    }

    const DeleteUser = async(id) => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        LoadUsers();
    }
    return (
        <div className="container my-3" >
           <table class="table">
            <thead class="table-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => {
                        return(
                            <tr>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary mr-1" to={`/user/${user.id}`}>View</Link>
                                    <Link className="btn btn-primary mr-1" onClick={() => DeleteUser(user.id)}>Delete</Link>
                                    <Link className="btn btn-primary" to={`/edit_user/${user.id}`}>Edit</Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
        </div>
    )
}

export default Home
