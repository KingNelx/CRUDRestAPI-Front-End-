import Buttons from "./Buttons";
import axios from "axios"
import { useState, useEffect } from "react";

const AdminTables = () => {

    const [admin, setAdmin] = useState([

    ])

    useEffect(() => {
       loadAdmins();
    }, [])

    const loadAdmins = async () => {
        const result = await axios.get("http://localhost:8080/admin/getAdmins");
        setAdmin(result.data)
    }

    return (
        <div className="container text-center mt-5">
            <h2> ADMIN </h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        admin.map((admins, index) => (
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{admins.userName}</td>
                                <td>{admins.userName}</td>
                                <td>@mdo</td>
                                <td>
                                    <Buttons />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AdminTables;