import { Link } from "react-router-dom"

const Column = () => {
    return (
        <div>
            <div class="container text-center my-5">
                <div class="row">
                    <div class="col">
                        <div class="card mx-auto" style={
                            { width: "18rem" }
                        }>

                            <div class="card-body">
                                <h5 class="card-title">ADMIN</h5>
                                <Link to="/AdminTables" class="btn btn-primary">SELECT</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card mx-auto" style={
                            { width: "18rem" }
                        }>

                            <div class="card-body">
                                <h5 class="card-title">USERS</h5>
                                <Link to="/UserTables" class="btn btn-primary">SELECT</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Column;