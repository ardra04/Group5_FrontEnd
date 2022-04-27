import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Appbar from './components/Appbar';
import Login from './components/login';
import Signup from './components/signup'
import Home from'./components/home'
import About from'./components/about'

function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          
          <Route exact path="/" element={<Home/>} />
          <Route exact path="about" element={<About/>} />
          <Route exact path="login" element={<Login/>} />
          <Route exact path="signup" element={<Signup />} />
         
        </Routes>

      </Router>
 
    </div>
  );
}



export default App;
