import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const AddUser = () => {

    let navigate = useNavigate()
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        userName: ""
    })

    const { firstName, lastName, email, userName } = user

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // double check this one tnx.
    // data is stored but it wont navigate to home
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user/addUser", user)
        navigate("/");
    }

    const success = () => {
        alert("Added succesfully")
    }

    return (
        <div className="container mt-5">
            <form onSubmit={(e) => onSubmit(e)}>
                <div class="mb-3">
                    <label>Firstname</label>
                    <input
                        type={"text"}
                        class="form-control"
                        name="firstName"
                        placeholder="Firstname"
                        value={firstName}
                        onChange={(e) => onInputChange(e)}
                    />

                </div>
                <div class="mb-3">
                    <label>Lastname</label>
                    <input
                        type={"text"}
                        class="form-control"
                        name="lastName"
                        placeholder="Lastname"
                        value={lastName}
                        onChange={(e) => onInputChange(e)}
                    />

                </div>
                <div class="mb-3">
                    <label>Email address</label>
                    <input
                        type={"email"}
                        class="form-control"
                        name="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => onInputChange(e)}
                    />

                </div>
                <div class="mb-3">
                    <label>Username</label>
                    <input
                        type={"text"}
                        class="form-control"
                        name="userName"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => onInputChange(e)}
                    />

                </div>
                <button type="submit" class="btn btn-primary mx-2" onClick={success}>Submit</button>
                <Link to="/" class="btn btn-primary">Go Back</Link>
            </form>
        </div>
    );
}

export default AddUser;