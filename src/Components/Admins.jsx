import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

const Admins = () => {

    const getAdmins = async () => {
        const adminData = await axios.get("http://localhost:8080/admin/getAdmins")
        setAdmin(adminData.data)
    }

    const [admin, setAdmin] = useState([])

    useEffect(() => {
        getAdmins()
    }, [])

    return (
        <div className="container mt-5">
            <Link to="/addAdmin">Add ADMIN</Link>
            <table class="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        admin.map((admins, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{admins.userName}</td>
                                <td>{admins.email}</td>
                                <td>@{admins.firstName}</td>
                                <td>
                                    <button className="btn btn-primary mx-1">VIEW</button>
                                    <button className="btn btn-success mx-1">UPDATE</button>
                                    <button className="btn btn-danger mx-1">DELETE</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Link to="/">Go Back</Link>
        </div>
    );
}

export default Admins;