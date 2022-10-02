import StateFarmLogo from "../assets/State_Farm_logo.svg.png";
import Header from "../utilities/Header.js";
import checkmark from "../assets/red-checkmark.png";
import { Link } from "react-router-dom";
import "./LifeChoice.css"

export default function LifeChoice()
{
    return(
        <section className="life-containers">
            <div className='life-paragraph-containers'>
                <p>Lorem</p>
            </div>
            <div className='life-option-containers'>
                <div className="life-options">
                    <img className="icons" src={checkmark}/>
                    <Link>Yes</Link>
                </div>
                <div className="life-options">
                    <img className="icons" src={checkmark}/>
                    <Link>No</Link>
                </div>
            </div>
        </section>
    )
}