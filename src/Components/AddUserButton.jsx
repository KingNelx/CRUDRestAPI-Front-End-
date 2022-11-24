import { Link } from "react-router-dom"

const AddUserButton = () => {
    return (
        <div className="mt-5">
            <Link to="/addUser" type="button" class="btn btn-outline-primary">Add User</Link>
        </div>
    );
}

export default AddUserButton;
