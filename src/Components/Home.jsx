import { Link } from "react-router-dom"
import Column from "./Column";

const Home = () => {
    return (
        <div>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Full Stack Application</a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        <Column />
        </div>
    );
}

export default Home;