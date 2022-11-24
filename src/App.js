import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Components/Home';
import AddUser from './Components/AddUser';
import Test from './Components/Test';

const App = () => {
  return ( 
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </Router>
    </div>
   );
}
 
export default App;