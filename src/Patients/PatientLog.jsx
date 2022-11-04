import { Link } from "react-router-dom"
import Button from "../Components/Button";

const PatientLog = () => {
    return (
        <div className="container mt-5 text-center">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                           <Button />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PatientLog;