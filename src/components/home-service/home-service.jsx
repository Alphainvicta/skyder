import React from 'react';
import './home-service.scss';
import Button from '../button/button.jsx';
import iservice from './images/download.png';

const Hservice = () => (
    <div className='hservice-cont'>
        <hr/>
        <div className='service-cont'>
            <div className='text-cont'>
                <div className='service-title'>
                    Brand & Digital
                </div>
                <div className='service-description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </div>
                <div className='more-button'>
                    <Button text={'Request a Quote'}/>
                </div>
            </div>
            <div className='image-cont'>
                <img src={iservice} alt='iservice'/>
            </div>
        </div>
    </div>
);

export default Hservice;