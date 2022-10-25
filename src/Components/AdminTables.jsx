import Buttons from "./Buttons";
import {axios} from "axios"
import { useState, useEffect } from "react";

const AdminTables = () => {

    const [admin, setAdmin]=useState([

    ])

    useEffect( () => {

    }, [])

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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                           <Buttons />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AdminTables;