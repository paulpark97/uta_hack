import Slides from "./Slides";

export default function ({backgroundColor, color,  content}) {
    return (
        <Slides color={backgroundColor} textColor="#fff">
            <p>{content}</p>
        </Slides>
    )
}