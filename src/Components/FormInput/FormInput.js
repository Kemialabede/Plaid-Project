import React from 'react';
import './FormInput.css'

function FormInput(props) {
    let finput;
    switch (props.size) {
        case "form-input":
            finput = "form-input"
            break;
        case "login":
            finput = "form-input login"
            break;
        default:
    }
    return (
        <div>
            <input  className={ finput } value={props.value} name={props.name} onChange={props.change} type= {props.type} placeholder ={props.placeholder} required={props.required} />
        </div>
    )
}

export default FormInput;
