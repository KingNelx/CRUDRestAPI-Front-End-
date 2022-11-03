import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Components/Home';
import DocLog from './Doctors/DocLog';
import PatientLog from './Patients/PatientLog';

const App = () => {
  return ( 
    <div>
        <Router>
          <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/docLog" element={<DocLog />} />
           <Route path="/patientLog" element={<PatientLog />} />
          </Routes>
        </Router>
    </div>
   );
}
 
export default App;