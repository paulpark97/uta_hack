import Slides from "./Slides";
import styles from "../../styles/slide.module.css";

export default function ({backgroundColor, color, content}) {
    return (
        <Slides color={backgroundColor}>
            <p className={styles.textSlides}>{content}</p>

        </Slides>
    )
}