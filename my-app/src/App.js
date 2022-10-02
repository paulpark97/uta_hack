// import logo from './logo.svg';
import './App.css';
import Home from './Screens/Home.js';
import bbq from './assets/bbq.jpg';
import ded from './assets/deadge.webp';
import weed from './assets/weed.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./utilities/Header.js";
import Slides, {GRADIENT_COLOR, reddy} from './Screens/components/Slides';
import TextSlides from './Screens/components/TextSlides';
import OptionsSlides from './Screens/components/OptionsSlides';
import TextInput from './Screens/components/TextInput';

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
  {title:'Continue',link:'/drugs'}
]
const DRUGS_YES_NO = [
  {title:'Yes',link:'/drugs_pic'},
  {title:'No',link:'/drugs_pic'}
]
const DRUGSPIC_YES_NO = [
  {title:'Continue',link:'/info'},

]
const INFO_YES_NO = [
  {title:'Continue',link:'/info2'},
]
const INFO2_YES_NO = [
  {title:'Continue',link:'/info'},
]

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/textSlides' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="People’s lives are always at risk. Here's how your probability of passing can increases due to the bad life choices." data={TEXTSLIDES_CONTINUE}/>}/>
          <Route path='/profession' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="What is your profession?" data={PROFESSION_OPTIONS}/>}/>
          <Route path='/death' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="Have you ever had a near death experience?" data={DEATH_YES_NO}/>}/>
          <Route path='/smoke' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="Do you smoke?" data={SMOKE_YES_NO}/>}/>
          <Route path='/smoke_pic' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="Smokers are 3X more likely to die earlier than non smokers, crazy huh" img={bbq} data={SMOKEPIC_YES_NO}/>}/>
          <Route path='/alc' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="Do you drink?" data={ALC_YES_NO}/>}/>
          <Route path='/alc_pic' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="People who drink are 2X more likely to die earlier compared to those who don't" img={ded} data={ALCPIC_YES_NO}/>}/>
          <Route path='/drugs' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="Do you use recreational drugs?" data={DRUGS_YES_NO}/>}/>
          <Route path='/drugs_pic' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="boi you dead as hell" img={weed} data={DRUGSPIC_YES_NO}/>}/>
          <Route path='/twilio' element={<TextInput backgroundColor={GRADIENT_COLOR}  title="Temp name" data={DRUGSPIC_YES_NO} />}/>
          {/* <Route path='/twilio' element={<TextInput backgroundColor={GRADIENT_COLOR} data={ALCPIC_YES_NO}/>}/> */}

          <Route path='/info' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="The chances of you passing away prematurely compared to someone who has WAY less fun than you is over 8x. In order to maintain your choices with peace of mind, you should think about getting life insurance." data={INFO_YES_NO}/>}/>
          <Route path='/info2' element={<OptionsSlides backgroundColor={GRADIENT_COLOR} title="Luckily with Statefarm you could get a life insurance policy for as low as $15.02/month and have the peice of mind knowing that your loved ones would be covered if tragedy ever strikes." data={INFO_YES_NO}/>}/>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;