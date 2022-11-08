import { Link } from "react-router-dom"
import Button from "../Components/Button";
import { useEffect, useState } from "react";
import axios from "axios"

const PatientLog = () => {
    
    const [patient, setPatient] = useState([])

    useEffect(() => {
        getAllPatients()
    }, [])


    const getAllPatients = async () => {
        const result = await axios.get("http://localhost:8080/rhu/getAllPatients")
        setPatient(result.data)
    }

    const addPatient = () => {

    }

    const updatePatient = () => {

    }

    const deletePatient = () => {

    }

    return (
        <div className="container mt-5 text-center">
            <Link type="button" class="btn btn-outline-primary mb-5 mt-4">Add Patient</Link>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Age</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patient.map((patients, index) => (
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{patients.firstName}</td>
                                <td>{patients.lastName}</td>
                                <td>{patients.gender}</td>
                                <td>{patients.age}</td>
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

export default PatientLog;