import checkmark from "../assets/red-checkmark.png";
import { Link } from "react-router-dom";
import "./Profession.css";

export default function Profession()
{
    return(
        <section className="pro-container">
            <div className='pro-paragraph-container'>
                <p>Do you smoke?</p>
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