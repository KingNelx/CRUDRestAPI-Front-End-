import { Link } from "react-router-dom"
import Button from "../Components/Button";
import { axios } from "axios"
import { useEffect, useState } from "react";


const PatientLog = () => {

    const [patient, setPatient] = useState([])

    useEffect( () => {

    }, [])


    const getAllPatients = () => {

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
                        <th scope="col">RHU</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Jonel</td>
                        <td>Tapia</td>
                        <td>Male</td>
                        <td>Bato</td>
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

export default PatientLog;