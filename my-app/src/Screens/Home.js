import checkmark from "../assets/red-checkmark.png";
import jake from "../assets/jake.gif";
import styles from "../styles/page.module.css";
import Logo from "./components/Logo";
import Options from "./components/Options";

import { Link } from "react-router-dom";

const OPTIONS_DATA = [
    {"title": "Small Business", "link": ""},
    {"title": "Health", "link": ""},
    {"title": "Life", "link": "/textSlides"},
    {"title": "Pet Medical", "link": ""}
]

export default function Home()
{
    return(
        <main className={`${styles.homeContainer}`}>
            <section className={`${styles.homeLeftSide}`}>
                <div className={`${styles.homeLogoHeader}`}>
                    <h1>Insurance<br/>Periodt.</h1>
                    <Logo color="#F01716" />
                </div>
                <Options data={OPTIONS_DATA} />
            </section>
            <section className={`${styles.homeRightSide}`}>
                <img src={jake} className={`${styles.jakeImg}`}></img>
            </section>
        </main>
    )
}
