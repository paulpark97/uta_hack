import checkmark from "../assets/red-checkmark.png";
import { Link } from "react-router-dom";
import "./Profession.css";

export default function Drugs()
{
    return(
        <section className="pro-container">
            <div className='pro-paragraph-container'>
                <p>Do you use recreational drugs?</p>
            </div>
            <div className='pro-option-container'>
                <div className="pro-options">
                    <img className="icons" src={checkmark}/>
                    <Link>Yes</Link>
                </div>
                <div className="pro-options">
                    <img className="icons" src={checkmark}/>
                    <Link>No</Link>
                </div>
            </div>
        </section>
    )
}