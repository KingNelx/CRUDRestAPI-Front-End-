import { Link } from "react-router-dom"
import Button from "../Components/Button";
import { useEffect, useState } from "react";
import axios from "axios"

const DocLog = () => {

    const [doctor, setDoctor] = useState([])

    useEffect(() => {
        getAllDoctors();
    }, [])

    const getAllDoctors = async () => {
        const result = await axios.get("http://localhost:8080/doctor/getDoctors")
        setDoctor(result.data)
    }

    const addDoctor = () => {

    }

    const updateDoctor = () => {

    }

    const deleteDoctor = () => {

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
                    {
                        doctor.map((doctors, index) => (
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{doctors.firstName}</td>
                                <td>{doctors.lastName}</td>
                                <td>{doctors.specialties}</td>
                                <td>{doctors.licenseNumber}</td>
                                <td>{doctors.ptrNumber}</td>
                                <td>{doctors.prcNumber}</td>
                                <td>
                                    <Button />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Link to="/">Go Back</Link>
        </div>
    );
}

export default DocLog;