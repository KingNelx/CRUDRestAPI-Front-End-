import axios  from "axios"
import { useState, useEffect } from "react"

const UserTables = () => {

    const [user, setUsers] = useState([

    ])

    useEffect = (() => {

    }, [])

    const loadUsers = () => {
        const userResults = axios.get("http://localhost:8080/user/getUsers")
    }

    return (
        <div className="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserTables;