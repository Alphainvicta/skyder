import React from 'react';
import './home.scss';
import Hservice from '../../components/home-service/home-service.jsx';
import { ReactComponent as Lvector } from '../../icons/left-vector.svg';
import { ReactComponent as Rvector } from '../../icons/right-vector.svg';

const Home = () => (
    <div className='home-cont'>
        <div className='vector-cont'>
            <Lvector/>
            <Rvector/>
        </div>
        <div className='main-screen'>
            <div className='main-title'>
            We’re a <span>Creative </span> <br/>Digital Studio.
            </div>
            <div className='main-slogan'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. Ut enim ad minim veniam.
            </div>
        </div>
        <Hservice/>
        <Hservice/>
        <Hservice/>
        <Hservice/>
    </div>
);

export default Home;