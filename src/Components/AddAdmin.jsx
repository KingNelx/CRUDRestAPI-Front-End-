import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddAdmin = () => {

    const navigate = useNavigate()
    const [admins, setAdmin] = useState({
        firstName: "",
        lastName: "",
        email: "",
        userName: ""
    })

    const onInputChange = (e) => {
        setAdmin({ ...admins, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:8080/admin/addAdmin", admins)
        navigate('/')
    }

    const { firstName, lastName, email, userName } = admins

    return (
        <div className="container mt-5">
            <form onSubmit={(e) => onSubmit(e)}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Firstname</label>
                    <input type={"text"} name="firstName" value={firstName} class="form-control" id="exampleInputEmail1"
                        onChange={(e) => onInputChange(e)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Lastname</label>
                    <input type={"text"} name="lastName" value={lastName} class="form-control" id="exampleInputEmail1"
                        onChange={(e) => onInputChange(e)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type={"email"} name="email" value={email} class="form-control" id="exampleInputEmail1"
                        onChange={(e) => onInputChange(e)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type={"text"} name="userName" value={userName} class="form-control" id="exampleInputEmail1"
                        onChange={(e) => onInputChange(e)} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default AddAdmin;