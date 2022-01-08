import './button.scss';
import React from 'react';

const Button = ({text}) => (
    <div className='button-cont'>
        <button>{text}</button>
    </div>
);

export default Button