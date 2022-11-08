import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Components/Home';
import DocLog from './Doctors/DocLog';
import PatientLog from './Patients/PatientLog';
import CreateDoc from './Doctors/CreateDoc';
import ViewDoc from './Doctors/ViewDoc';
import UpdateDoc from './Doctors/UpdateDoc';

const App = () => {
  return ( 
    <div>
        <Router>
          <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/docLog" element={<DocLog />} />
           <Route path="/patientLog" element={<PatientLog />} />
           <Route path="/addDoctor" element={<CreateDoc />} />
           <Route path="/viewDoctor" element={<ViewDoc />} />
           <Route path="/updateDoctor" element={<UpdateDoc />} />
          </Routes>
        </Router>
    </div>
   );
}
 
export default App;