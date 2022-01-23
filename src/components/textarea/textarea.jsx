import React from 'react';
import './textarea.scss';

const Textarea = ({id, name, value}) => (
    <div className='textarea-cont'>
        <textarea id={id} name={name} placeholder={value}>
        </textarea>
    </div>
);

export default Textarea;