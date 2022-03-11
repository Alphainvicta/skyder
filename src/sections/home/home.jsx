import React from 'react';
import './home.scss';
import Homelist from '../../components/home-service/home-service-list.jsx';

import { ReactComponent as Lvector } from '../../icons/left-vector.svg';
import { ReactComponent as Rvector } from '../../icons/right-vector.svg';

const Home = () => (
    <div className='home-cont'>
        <div className='vector-cont'>
            <Lvector />
            <Rvector />
        </div>
        <div className='main-screen'>
            <div className='main-title'>
            Drone <span>Studio </span> <br/>& operations
            </div>
            <div className='main-slogan'>
            Identidad audiovisual + servicios con drone para todas las indsutrias, <br/> técnica, creativa y más.
            </div>
        </div>
        <Homelist/>
    </div>
);

export default Home;