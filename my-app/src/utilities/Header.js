import StateFarmLogo from "../assets/State_Farm_logo.svg.png";

export default function Header()
{
    return(
        <header class="header">
            <img class="state-farm-logo" src={StateFarmLogo}/>
            <h1>
                State Farm Simulator
            </h1>
        </header>
    )
}