// import { useState } from "react";
// import styles from "../../styles/slide.module.css";
// import Logo from "./Logo";
// // import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
//  import twilio from 'twilio';

// export const GRADIENT_COLOR = "linear-gradient(159.02deg, #FFE8D8 10.04%, #FFEBFD 32.85%, #FFF8E8 84.27%)"
// export const reddy = "#E12623"

// export default function (props, logoColor) {
//     let textColor = props.textColor ?? '#E12623';
//     let { phone, setPhone } = useState("");

//     let storePhone = () => {
//         // setPhone(document.querySelector("#phone").value);
//         window.localStorage.setItem("phone", document.querySelector("#phone").value);
//         console.log(phone);
//     }

// const accountSid = 'AC67c6298504aca55a217ea5fc50ebc324'; 
// const authToken = '61ac6a0544257958673c111a9c3c6fbe'; 
// const client = require('twilio')(accountSid, authToken); 

// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+15617695207',
//      to: '+16823529977'
//    })
//   .then(message => console.log(message.sid));


//     return (
//         <main style={{background: props.color, color: textColor}} className={`${styles.slideContainer}`}>
//             <header className={`${styles.header}`}><h1>Insurance <br/> Periodt.</h1></header>
//             <section className={`${styles.slideContentContainer}`}>{props.children}</section>
//             <input style={{
//                 "padding": "20px",
//                 "margin": "50px",
//                 "position": "absolute",
//                 "top": "100px",
//             }} id="phone" value={
//                 window.localStorage.getItem("phone")
//             } />
//             <input type="submit" style={{
//                 "padding": "20px",
//                 "margin": "50px",
//                 "position": "absolute",
//                 "top": "200px"
//             }} onClick={ storePhone } />
//             <footer className={`${styles.footer}`}>
//                 <Logo color={"#F01716"}/> 
//             </footer>
//         </main>
//     )
// }