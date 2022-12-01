import ViewUsers from "./ViewUsers";
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <nav class="navbar bg-light shadow-lg  py-3">
                <div class="container-fluid">
                    <a class="navbar-brand">User Management System</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <section className="mt-5 px-5">
                <Link to="/addUser" className="btn btn-outline-primary">Add User</Link>
            </section>
            <ViewUsers />
        </div>
    );
}

export default Home;