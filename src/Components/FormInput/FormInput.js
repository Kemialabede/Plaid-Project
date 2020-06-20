import React from 'react';
import './FormInput.css'

function FormInput(props) {
    return (
        <div>
            <input  className="form-input" value={props.value} name={props.name} onChange={props.change} type= {props.type} placeholder ={props.placeholder} required={props.required} />
        </div>
    )
}

export default FormInput;
