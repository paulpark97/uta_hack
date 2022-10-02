import styles from "../../styles/slide.module.css";
import Logo from "./Logo";

export const GRADIENT_COLOR = "linear-gradient(159.02deg, #FFE8D8 10.04%, #FFEBFD 32.85%, #FFF8E8 84.27%)"
export const reddy = "#E12623"

export default function (props, logoColor) {
    let textColor = props.textColor ?? '#E12623';
    return (
        <main style={{background: props.color, color: textColor}} className={`${styles.slideContainer}`}>
            <header className={`${styles.header}`}><h1>Insurance <br/> Periodt.</h1></header>
            <section className={`${styles.slideContentContainer}`}>{props.children}</section>
            <footer className={`${styles.footer}`}>
                <Logo color={"#F01716"}/> 
            </footer>
        </main>
    )
}