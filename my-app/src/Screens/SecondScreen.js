import checkmark from "../assets/red-checkmark.png";
import { Link } from "react-router-dom";
import "./Profession.css";
import logo from "../assets/State_Farm_logo.svg.png";
import styles from "../styles/slide.module.css";

export default function SecondScreen()
{
    return(
        <section  >
            <img />
            <p>People life are constantly at risk, the below riskometer measure an individual’s probability of risk</p>
            <div class="options">
                <img class="icons" src={checkmark}/>
                <Link to='/pro'>Next</Link>
            </div>
        </section>
    )
}