import React from 'react';
import './checkbox.scss';

const Checkbox = ({id, name, value}) => (
    <div className='checkbox-cont'>
        <input type="checkbox" id={id} name={name} value={value}/>
        <label htmlFor={value}>{id}</label>
    </div>
); 

export default Checkbox;