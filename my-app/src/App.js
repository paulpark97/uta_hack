import logo from './logo.svg';
import './App.css';
import Home from './Screens/Home.js';
import LifeChoice from './Screens/LifeChoice.js';
import Profession from './Screens/Profession.js';
import Smoke from './Screens/Smoke.js';
import Alcohol from './Screens/Alcohol.js';
import Drugs from './Screens/Drugs.js';
import SecondScreen from './Screens/SecondScreen.js';
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
          <Route path='/pro' element={<Profession/>}/>
          <Route path='/smoke' element={<Smoke/>}/>
          <Route path='/alc' element={<Alcohol/>}/>
          <Route path='/drugs' element={<Drugs/>}/>
          <Route path='/second' element={<SecondScreen/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
