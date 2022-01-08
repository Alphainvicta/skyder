import React from 'react';
import './home-service.scss';
import iservice from './images/download.png';

const Hservice = () => (
    <div className='hservice-cont'>
        <hr/>
        <div className='service-cont'>
            <div className='text-cont'>
                <div className='service-title'>
                    servicio 1
                </div>
                <div className='service-description'>
                    descripcion 1
                </div>
                <div className='more-button'>
                    <button>boton</button>
                </div>
            </div>
            <div className='image-cont'>
                <img src={iservice} alt='iservice'/>
            </div>
        </div>
    </div>
);

export default Hservice;