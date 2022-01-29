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
            Drone <span>Studio </span> <br/>& soluciones
            </div>
            <div className='main-slogan'>
            Servicios especializados con drones para todas las industrias, <br/> inmobiliarias, sociales, técnicas y más
            </div>
        </div>
        <Homelist/>
    </div>
);

export default Home;