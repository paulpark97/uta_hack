import StateFarmLogo from "../assets/State_Farm_logo.svg.png";
import Header from "../utilities/Header.js";
import checkmark from "../assets/red-checkmark.png";
import { Link } from "react-router-dom";
import "./LifeChoice.css"


export default function LifeChoice()
{
    return(
        <section class="container">
            <div class='paragraph-container'>
                <p>Lorem</p>
            </div>
            <div class='option-container'>
                <div class="options">
                    <img class="icons" src={checkmark}/>
                    <Link>Yes</Link>
                </div>
                <div class="options">
                    <img class="icons" src={checkmark}/>
                    <Link>No</Link>
                </div>
            </div>
        </section>
    )
}