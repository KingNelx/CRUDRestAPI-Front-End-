import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Components/Home';
import AddForm from './Components/AddForm';

const App = () => {
  return ( 
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="add"  element={<AddForm />}/>
          </Routes>
        </Router>
    </div>
   );
}
 
export default App;