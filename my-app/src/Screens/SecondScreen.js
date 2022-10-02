import checkmark from "../assets/red-checkmark.png";
import { Link } from "react-router-dom";
import "./Profession.css";

export default function SecondScreen()
{
    return(
        <section  style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',gap:'2rem',marginTop:'3rem',background: 'linear-gradient(159.02deg, #FFE8D8 13.86%, #FFEBFD 36.67%, #FFF8E8 88.09%), #FFFFFF' }}>
            <p>People life are constantly at risk, the below riskometer measure an individual’s probability of risk</p>
            <div class="options">
                <img class="icons" src={checkmark}/>
                <Link to='/pro'>Next</Link>
            </div>
        </section>
    )
}