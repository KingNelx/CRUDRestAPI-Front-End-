import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import AddForm from './Components/AddForm';
import UpdateForm from './Components/UpdateForm';
import Admins from './Components/Admins';
import AddAdmin from './Components/AddAdmin';

const App = () => {
  return ( 
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddForm />} />
        <Route path="/updateUser" element={<UpdateForm />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/addAdmin" element={<AddAdmin />} />
      </Routes>
     </Router>
    </div>
   );
}
 
export default App;