import checkmark from "../assets/red-checkmark.png";
import { Link } from "react-router-dom";
import "./Profession.css";
import ProgressBar from "../utilities/ProgressBar";

export default function Smoke()
{
    return(
        <section className="pro-container">
            <div className="col-container">
                <div className="row-container">
                    <div className='pro-paragraph-container'>
                        <p>Do you smoke?</p>
                    </div>
                    <div className='pro-option-container'>
                        <div className="pro-options">
                            <img className="icons" src={checkmark}/>
                            <Link to='/alc'>College Student</Link>
                        </div>
                        <div className="pro-options">
                            <img className="icons" src={checkmark}/>
                            <Link to='/alc'>Worker</Link>
                        </div>
                        <div className="pro-options">
                            <img className="icons" src={checkmark}/>
                            <Link to='/alc'>Retired</Link>
                        </div>
                    </div>
                </div>
           <ProgressBar></ProgressBar>
           </div>
        </section>
    )
}