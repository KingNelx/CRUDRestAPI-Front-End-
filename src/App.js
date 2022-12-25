import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddUser from './AddUser';
import EditUser from './EditUser';
const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addUser" element={<AddUser />} />
        <Route path="editUser/:id" element={<EditUser />} />
      </Routes>
    </Router>

  );
}

export default App;