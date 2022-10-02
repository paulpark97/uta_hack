// import logo from './logo.svg';
import './App.css';
import Home from './Screens/Home.js';
import bbq from './assets/bbq.jpg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./utilities/Header.js";
import Slides, {GRADIENT_COLOR} from './Screens/components/Slides';
import TextSlides from './Screens/components/TextSlides';
import OptionsSlides from './Screens/components/OptionsSlides';

const TEXTSLIDES_CONTINUE = [
  {title:'Continue',link:'/profession'}
]
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
  {title:'Yes',link:'/smoke_pic'},
  {title:'No',link:'/smoke_pic'}
]
const SMOKEPIC_YES_NO = [
  {title:'Continue',link:'/alc'}
]
const ALC_YES_NO = [
  {title:'Yes',link:'/alc_pic'},
  {title:'No',link:'/alc_pic'}
]
const ALCPIC_YES_NO = [
  {title:'Yes',link:'/drugs'},
  {title:'No',link:'/drugs'}
]
const DRUGS_YES_NO = [
  {title:'Yes',link:'/drugs_pic'},
  {title:'No',link:'/drugs_pic'}
]
const DRUGSPIC_YES_NO = [
  {title:'Yes',link:'/drugs'},
  {title:'No',link:'/drugs'}
]

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/textSlides' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="People’s lives are always at risk, the below riskometer measure’s an individual’s probability of passing due to their life choices" data={TEXTSLIDES_CONTINUE}/>}/>
          <Route path='/profession' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="What is your profession?" data={PROFESSION_OPTIONS}/>}/>
          <Route path='/death' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="Have you eveer had a near death experince?" data={DEATH_YES_NO}/>}/>
          <Route path='/smoke' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="Do you smoke?" data={SMOKE_YES_NO}/>}/>
          <Route path='/smoke_pic' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="Smokers are 3 times more likely to die earlier" img={bbq} data={SMOKEPIC_YES_NO}/>}/>
          <Route path='/alc' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="Do you drink?" data={ALC_YES_NO}/>}/>
          <Route path='/alc_pic' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="People who drink are 25% more likely to die earlier compared to those who don't" img={bbq} data={ALCPIC_YES_NO}/>}/>
          <Route path='/drugs' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="Do you use recreational drugs?" data={DRUGS_YES_NO}/>}/>
          <Route path='/drugs_pic' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="boi you dead as hell" img={bbq} data={SMOKEPIC_YES_NO}/>}/>

          <Route path='/slides' element={<Slides color={GRADIENT_COLOR}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
