import React from 'react';
import './home-service.scss';
import { Link } from "react-router-dom";
import Button from '../button/button.jsx';

const Hservice = ({title, description, image, link}) => (
    <div className='hservice-cont'>
        <hr/>
        <div className='service-cont'>
            <div className='text-cont'>
                <div className='service-title'>
                    {title}
                </div>
                <div className='service-description'>
                    {description}
                </div>
                <div className='button'>
                    <Link to={link}><Button text='More information' /></Link>
                </div>
                <div className='button'>
                    <Link to='/quote'><Button text='Request a quote' /></Link>
                </div>
            </div>
            <div className='image-cont'>
                <img src={image} alt='iservice'/>
            </div>
        </div>
    </div>
);

export default Hservice;