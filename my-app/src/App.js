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
const DEATH_YES_NO = [
  {title:'Yes',link:'/smoke'},
  {title:'No',link:'/smoke'}
]
const SMOKE_YES_NO = [
  {title:'Yes',link:'/smoke'},
  {title:'No',link:'/smoke'}
]
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/textSlides' element={<TextSlides backgroundColor={GRADIENT_COLOR} content="People’s lives are always at risk, the below riskometer measure’s an individual’s probability of passing due to their life choices"/>}/>
          <Route path='/profession' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="What is your profession?" data={PROFESSION_OPTIONS}/>}/>
          <Route path='/death' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="Have you eveer had a near death experince?" data={DEATH_YES_NO}/>}/>
          <Route path='/smoke' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="Do you smoke?" data={SMOKE_YES_NO}/>}/>
          
          
          <Route path='/slides' element={<Slides color={GRADIENT_COLOR}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
