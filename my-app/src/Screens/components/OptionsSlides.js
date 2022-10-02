import Slides from "./Slides";
import SlideTitle from "./SlideTitle";
import Options from "./Options";

import styles from "../../styles/slide.module.css";

export default function ({backgroundColor, color, content, title, data,img}) {
    return (
        <Slides color={backgroundColor}>
            <div className={`${styles.optionsContent}`}>
                <SlideTitle title={title}/>
                {(data)? <Options data={data}/>:<img src={img}/>}
            </div>
        </Slides>
    )
}