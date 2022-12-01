import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import AddForm from './Components/AddForm';
import UpdateForm from './Components/UpdateForm';

const App = () => {
  return ( 
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddForm />} />
        <Route path="/updateUser" element={<UpdateForm />} />
      </Routes>
     </Router>
    </div>
   );
}
 
export default App;