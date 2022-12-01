import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const AddForm = () => {

    let navigate = useNavigate()
    
    const [user, setUsers] = useState({
        firstName: "",
        lastName: "",
        email: "",
        userName: ""
    })

    const { firstName, lastName, email, userName } = user

    const onInputChange = (e) => {
        setUsers({...user, [e.target.name]:e.target.value})
    }
    
    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:8080/user/addUser", user)
        navigate('/')
    }
    return (
        <div className="container">
            <form className="row mt-5" onSubmit={(e)=>onSubmit(e)}>
                <div class="mb-3 col-md-5">
                    <label for="exampleInputEmail1" class="form-label">Firstname</label>
                    <input type={"text"} class="form-control" placeholder="Firstname"
                        name="firstName" value={firstName} onChange={(e) => onInputChange(e)} />

                </div>
                <div class="mb-3 col-md-5">
                    <label for="exampleInputEmail1" class="form-label">Lastname</label>
                    <input type={"text"} class="form-control" placeholder="Lastname"
                        name="lastName" value={lastName} onChange={(e) => onInputChange(e)} />

                </div>

                <div class="mb-3 col-md-5">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type={"email"} class="form-control" placeholder="Email Address"
                        name="email" value={email} onChange={(e) => onInputChange(e)} />

                </div>
                <div class="mb-3 col-md-5">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type={"text"} class="form-control" placeholder="Username"
                        name="userName" value={userName} onChange={(e) => onInputChange(e)} />

                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                    <Link to="/" className="btn btn-danger mx-2">Go back</Link>
                </div>
            </form>
        </div>
    );
}

export default AddForm;