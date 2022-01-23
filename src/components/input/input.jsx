import React from 'react';
import './input.scss';

const Input = ({id, name, value, type}) => (
    <div className='input-cont'>
        <input type={type} id={id} name={name} placeholder={value}/>
    </div>
); 

export default Input;