// import logo from './logo.svg';
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
import Slides, {GRADIENT_COLOR} from './Screens/components/Slides';
import TextSlides from './Screens/components/TextSlides';
import OptionsSlides from './Screens/components/OptionsSlides';

const PROFESSION_OPTIONS = [
  {title: "College Student", link:"/death"},
  {title: "Worker", link:"/death"},
  {title: "Retired", link:"/death"},
]
const YES_NO = [
  {title:'Yes',link:'link'},
  {title:'No',link:'link'}
]

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/textSlides' element={<TextSlides backgroundColor={GRADIENT_COLOR} content="People’s lives are always at risk, the below riskometer measure’s an individual’s probability of passing due to their life choices"/>}/>
          <Route path='/profession' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="What is your profession?" data={PROFESSION_OPTIONS}/>}/>
          <Route path='/death' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="Have you eveer had a newar death experince?" data={YES_NO}/>}/>
          <Route path='/smoke' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="Do you smoke?" data={YES_NO}/>}/>
          <Route path='/' element={<Home/>} />
          <Route path='/life' element={<LifeChoice/>}/>
          <Route path='/pro' element={<Profession/>}/>
          <Route path='/smoke' element={<Smoke/>}/>
          <Route path='/alc' element={<Alcohol/>}/>
          <Route path='/drugs' element={<Drugs/>}/>
          <Route path='/second' element={<SecondScreen/>}/>
          <Route path='/slides' element={<Slides color={GRADIENT_COLOR}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
