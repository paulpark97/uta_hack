import checkmark from "../assets/red-checkmark.png";
import { Link } from "react-router-dom";
import "./Profession.css";
import ProgressBar from "../utilities/ProgressBar";

export default function Alcohol()
{
    return(
        <section className="pro-container">
            <div className="col-container">
                <div className="row-container">
                    <div className='pro-paragraph-container'>
                        <p>Do you drink alcohol?</p>
                    </div>
                    <div className='pro-option-container'>
                        <div className="pro-options">
                            <img className="icons" src={checkmark}/>
                            <Link to='/drugs'>Yes</Link>
                        </div>
                        <div className="pro-options">
                            <img className="icons" src={checkmark}/>
                            <Link to='/drugs'>No</Link>
                        </div>
                    </div>
                </div>
           <ProgressBar></ProgressBar>
           </div>
        </section>
    )
}