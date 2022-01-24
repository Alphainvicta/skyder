import React from 'react';
import './radio.scss';

const Radio = ({id, name, value}) => (
    <div className='radio-cont'>
        <input type="radio" id={id} name={name} value={value}/>
        <label htmlFor={value}>{id}</label>
    </div>
);

export default Radio;