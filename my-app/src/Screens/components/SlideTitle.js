import styles from "../../styles/slide.module.css";

export default function ({title}) {
    return <h2 className={styles.slideTitle}>{title}</h2>
}