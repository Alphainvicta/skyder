import React from 'react';
import './service.scss';
import {Link} from 'react-router-dom';

import Dblock from '../../components/description-block/description-block.jsx';
import Button from '../../components/button/button.jsx';

const Service = ({title, description, image, details, cost, additional}) => (
    <div className="service-cont">
        <div className='info-cont'>
            <div className='service-title'>
                {title}
            </div>
            <div className='service-description'>
                {description}
            </div>
            <div className='image-cont'>
                <img src={image} alt=''/>
            </div>
        </div>
        <Dblock title='Service Details' details={details}/>
        <hr/>
        <Dblock title='Estimated Cost' details={cost}/>
        <hr/>
        <Dblock title='Additional Info' details={additional}/>
        <hr/>
        <div className='goquote-cont'>
            <div className='title'>
                What are you waiting for?
            </div>
            <div className='extra-slogan'>
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim
            </div>
            <div className='button'>
                <Link to='/quote'><Button text='Request a Quote'/></Link>
            </div>
        </div>
    </div>
);

export default Service;