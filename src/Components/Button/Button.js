import React from 'react';
import './Button.css'
import arrow from '../../Components/mainicons/arrow-down-black1000.svg'

function Button(props) {
    let classtyle;
    switch (props.color) {
        case "button":
            classtyle = "button"
            break;
        case "nav":
            classtyle = "button nav"
            break;
        case "section-button":
            classtyle = "button section-button"
            break;
        case "section-button-two":
            classtyle = "button section-button-two"
            break;
        case "footer-button":
            classtyle = "button footer-button"
            break;
            case "footer-button-two":
            classtyle = "button footer-button-two"
            break;
        default:
    }
    return (
        <div>
            <button className={ classtyle }>{props.text} <div className="btn-arrow"><img src={arrow} alt= "arrow"/></div></button>
        </div>
    )
}

export default Button;
