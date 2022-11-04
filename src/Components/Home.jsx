import Users from "./Users";
const Home = () => {
    return (
        <div>
            <div className="top-nav">
                <div className="left-title">
                    <h2>Full Stack Application</h2>
                </div>
                <div className="right-title">
                    <input type="text" placeholder="Search" />
                    <button>Search</button>
                </div>
            </div>
            <Users />
        </div>
    );
}

export default Home;