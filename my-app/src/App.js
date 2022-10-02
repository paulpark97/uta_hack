import logo from './logo.svg';
import './App.css';
import Home from './Screens/Home.js';
import LifeChoice from './Screens/LifeChoice.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./utilities/Header.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/life' element={<LifeChoice/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
