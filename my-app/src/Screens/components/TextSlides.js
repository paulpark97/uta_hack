import Slides from "./Slides";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../../styles/slide.module.css";

export default function ({backgroundColor, color,  content, progress}) {
    return (
        <Slides color={backgroundColor}>
            <p  className={`${styles.textSlides}`}>{content}</p>
            {(progress)? <ProgressBar now={progress} label={`${progress}%`} />:null}
        </Slides>
    )
}