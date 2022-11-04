import { Link } from "react-router-dom"

const Users = () => {
    return (
        <div className="users-container">
            <div className="row">
                <div className="col">
                    <h2>Doctor</h2>
                    <Link to="docLog">Select</Link>
                </div>
                <div className="col">
                    <h2>Patient</h2>
                    <Link to="/patientLog">Select</Link>
                </div>
            </div>
        </div>
    );
}

export default Users;