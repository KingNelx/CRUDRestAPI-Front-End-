import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Components/Home';
import AddForm from './Components/AddForm';
import UserTables from './Components/UserTables.jsx'
import AdminTables from './Components/AdminTables.jsx'
const App = () => {
  return ( 
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="addUser"  element={<AddForm />}/>
            <Route path="UserTables" element={<UserTables />} />
            <Route path="AdminTables" element={<AdminTables />} />
          </Routes>
        </Router>
    </div>
   );
}
 
export default App;