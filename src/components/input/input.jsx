import React from 'react';
import './input.scss';

const Input = ({id, name, value, type, label}) => (
    <div className='input-cont'>
        <input type={type} id={id} name={name} placeholder={value} />
        <label>{label}</label>
    </div>
); 

export default Input;