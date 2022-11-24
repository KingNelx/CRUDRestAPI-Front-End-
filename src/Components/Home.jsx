import AddUser from "./AddUserButton";
import axios from "axios";
import { useState, useEffect } from "react";


const Home = () => {

    const getAllUsers = async () => {
        const getAll = await axios.get("http://localhost:8080/user/getAllUsers")
        setUsers(getAll.data)
    }

    const [users, setUsers] = useState([

    ])

    useEffect(() => {
        getAllUsers();
    }, [])


    return (
        <div className="container">
            <nav className="bg-light shadow-lg py-5 text-center">
                <h2> Full Stack Application </h2>
            </nav>
            <AddUser />
            <table class="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.userName}</td>
                                <td>
                                    <button type="button" class="btn btn-outline-primary mx-1">UPDATE</button>
                                    <button type="button" class="btn btn-outline-warning">DELETE</button>
                                    <button type="button" class="btn btn-outline-danger mx-1">VIEW</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

                {/* 
                 <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <button type="button" class="btn btn-outline-primary">UPDATE</button>
                            <button type="button" class="btn btn-outline-warning">DELETE</button>
                            <button type="button" class="btn btn-outline-danger">VIEW</button>
                        </td>
                    </tr> */}

            </table>
        </div>
    );
}

export default Home;