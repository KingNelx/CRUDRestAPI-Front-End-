import { Link } from "react-router-dom"
import Button from "../Components/Button";
import { useEffect, useState } from "react";

const DocLog = () => {

    const [doctor, setDoctor] = useState([])

    useEffect(() => {

    }, [])

    const getAllDoctors = () => {

    }

    const addDoctor = () => {

    }

    return (
        <div className="container mt-5 text-center">
            <Link type="button" class="btn btn-outline-primary mb-5 mt-4">Add Doctors</Link>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Specialties</th>
                        <th scope="col">LicenseNumber</th>
                        <th scope="col">PTRNumber</th>
                        <th scope="col">PRCNumber</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Jonel</td>
                        <td>Tapia</td>
                        <td>Cancer</td>
                        <td>12345</td>
                        <td>12345</td>
                        <td>12345</td>
                        <td>
                            <Button />
                        </td>
                    </tr>
                </tbody>
            </table>
            <Link to="/">Go Back</Link>
        </div>
    );
}

export default DocLog;