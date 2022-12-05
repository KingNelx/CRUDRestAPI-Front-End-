import axios from "axios"
import { useEffect, useState } from "react";

const ViewUsers = () => {

    const getAllUsers = async () => {
        const getAllUser = await axios.get("http://localhost:8080/user/getAllUsers")
        setUser(getAllUser.data)
    }

    const [users, setUser] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])

    return (

        <div className="container mt-5">
            <table class="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.userName}</td>
                                <td>
                                    <button className="btn btn-primary mx-1">VIEW</button>
                                    <button className="btn btn-success mx-1">UPDATE</button>
                                    <button className="btn btn-danger mx-1">DELETE</button>
                                </td>
                            </tr>
                        ))
                    }

                    {/* <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr> */}
                    
                </tbody>
            </table>
        </div>
    );
}

export default ViewUsers;