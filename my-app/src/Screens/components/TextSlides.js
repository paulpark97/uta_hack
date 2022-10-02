import Slides from "./Slides";

export default function ({backgroundColor, color, content}) {
    return (
        <Slides color={backgroundColor}>
            <p>{content}</p>
        </Slides>
    )
}