import React from 'react';
import './Button.css'
import arrow from '../../Components/mainicons/arrow-down-black1000.svg'
import whitearrow from '../../Components/mainicons/next.svg'
import rightarrow from '../../Components/mainicons/right.svg'

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
            classtyle = "footer-button"
            break;
            case "footer-button-two":
            classtyle = "footer-button-two"
            break;
            case "log":
            classtyle = "log"
            break
        default:
    }
    let image;
    switch (props.src) {
            case rightarrow:
                image = rightarrow
            break;
            case whitearrow:
                image = whitearrow
            break;
        default:
            break;
    }
    return (
        <div>
            <button className={ classtyle }>{props.text} <div className="btn-arrow"><img src={image} alt= "arrow"/></div></button>
        </div>
    )
}

export default Button;
