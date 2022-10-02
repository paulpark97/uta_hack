import logo from "../assets/State_Farm_logo.svg.png";

export default function Options()
{
    let slides = {}
    return(
        <section>
            <Header/>
            
            <img src={logo}/>
        </section>
    )
}

function Header()
{
    return(
        <section>
            Insurance<br/>Periodt
        </section>
    )
}

function Para({content})
{
    return(
        <div>
            {content}
        </div>
    )
}