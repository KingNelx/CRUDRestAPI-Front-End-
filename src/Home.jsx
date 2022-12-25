import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

const Home = () => {

    const [user, setUser] = useState([])
    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const getUsers = await axios.get("http://localhost:8080/user/getUsers")
        setUser(getUsers.data)
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }
    return (
        <div>
            <nav class="navbar bg-light shadow-lg py-3">
                <div class="container-fluid">
                    <a class="navbar-brand">Full Stack Application</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <Link to="/addUser" type="button" class="btn btn-primary mt-5 mx-5">Add User</Link>
            <table class="table table-striped text-center mt-5 container">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((users, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{users.firstName}</td>
                                <td>{users.lastName}</td>
                                <td>{users.email}</td>
                                <td>{users.age}</td>
                                <td>
                                    <Link to={`/editUser/${users.id}`} type="button" class="btn btn-outline-primary">UPDATE</Link>
                                    <button type="button" class="btn btn-outline-success mx-2">VIEW</button>
                                    <button type="button" class="btn btn-outline-danger"
                                    onClick={() => deleteUser(user.id)}>DELETE</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Home;