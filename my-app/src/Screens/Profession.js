import checkmark from "../assets/red-checkmark.png";
import { Link } from "react-router-dom";
import "./Profession.css";

export default function Profession()
{
    return(
        <section className="pro-container">
            <div className='pro-paragraph-container'>
                <p>What is your profession?</p>
            </div>
            <div className='pro-option-container'>
                <div className="pro-options">
                    <img className="icons" src={checkmark}/>
                    <Link>College Student</Link>
                </div>
                <div className="pro-options">
                    <img className="icons" src={checkmark}/>
                    <Link>Worker</Link>
                </div>
                <div className="pro-options">
                    <img className="icons" src={checkmark}/>
                    <Link>Retired</Link>
                </div>
            </div>
        </section>
    )
}