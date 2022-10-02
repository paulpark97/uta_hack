import styles from "../../styles/page.module.css";
import { Link } from "react-router-dom";

export default function Options({data}) {
    return data && <ul className={`${styles.optionList}`}>
        {data.map((e, i) => {
            return (<li key={`${i}-option-item`} className={`${styles.optionItem}`}><Link to={e.link}>{e.title}</Link></li>);
        })}
    </ul>
}