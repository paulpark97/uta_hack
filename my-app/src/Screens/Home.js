import './Home.css';
import Header from "../utilities/Header.js";
import checkmark from "../assets/red-checkmark.png";
import jake from "../assets/jake.gif";
import { Link } from "react-router-dom";

export default function Home()
{
    return(
        <main class="container">
            
            <section class="content">
                
                <Options/>
                <Jake/>
            </section>
        </main>
    )
}

function Options()
{
    return(
        <div class="left-container">
            <h2>Pick Your Experience</h2>
            <div class="options" to="/about">
                <img class="icons" src={checkmark}/>
                <Link to="/pro">LifeChoice</Link>
            </div>
            <div class="options">
                <img class="icons" src={checkmark}/>
                <Link to='/drugs'>Profession</Link>
            </div>
            <div class="options">
                <img class="icons" src={checkmark}/>
                <Link to='/smoke'>Pet Medical</Link>
            </div>
            <div class="options">
                <img class="icons" src={checkmark}/>
                <Link to='/alc'>Disable</Link>
            </div>
        </div>
    )
}

function Jake()
{
    return(
        <div class="right-container">
            <img class="jake-from-statefarm" src={jake}/>
        </div>
    )
}