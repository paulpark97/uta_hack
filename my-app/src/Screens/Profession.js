import checkmark from "../assets/red-checkmark.png";
import { Link } from "react-router-dom";
import "./Profession.css";
import styles from "./Profession.module.css";
import ProgressBar from "../utilities/ProgressBar";
import Header from "../utilities/Header.js";

export default function Profession()
{
    return(
        <section className={`green ${styles.backgroundSuperRed}`}>
            <div className="col-container">
                <div className="row-container">
                
                    <div className='pro-paragraph-container'>
                        <p>What is your profession?</p>
                    </div>
                    <div className='pro-option-container'>
                        <div className="pro-options">
                            <img className="icons" src={checkmark}/>
                            <Link to='/smoke'>College Student</Link>
                        </div>
                        <div className="pro-options">
                            <img className="icons" src={checkmark}/>
                            <Link to='/smoke'>Worker</Link>
                        </div>
                        <div className="pro-options">
                            <img className="icons" src={checkmark}/>
                            <Link to='/smoke'>Retired</Link>
                        </div>
                    </div>
                </div>
           <ProgressBar></ProgressBar>
           </div>
        </section>
    )
}