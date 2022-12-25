import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useState } from "react"

const AddUser = () => {

    let navigate = useNavigate();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age: ""
    })

    const { firstName, lastName, email, age } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user/addUser", user)
        navigate('/')
    }
    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="container col-md-4 py-5 mt-5">
                    <h2 className="mb-3"> Add new User </h2>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">First name</label>
                        <input type={"text"} name="firstName" value={firstName} class="form-control" onChange={(e) => onInputChange(e)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Last name</label>
                        <input type={"text"} name="lastName" value={lastName} class="form-control" onChange={(e) => onInputChange(e)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type={"email"} name="email" value={email} class="form-control" onChange={(e) => onInputChange(e)} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Age</label>
                        <input type={"age"} name="age" value={age} class="form-control" onChange={(e) => onInputChange(e)} />
                    </div>
                    <button className="btn btn-outline-primary">Confirm</button>
                </div>
            </form>
        </div>
    );
}

export default AddUser;