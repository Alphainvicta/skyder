import React from 'react';
import './home.scss';
import List from '../../components/home-service/home-service-list.jsx';

import Lvector from '../../icons/left-vector.png';
import Rvector from '../../icons/right-vector.png';

const Home = () => (
    <div className='home-cont'>
        <div className='vector-cont'>
            <img src={Lvector} alt=''/>
            <img src={Rvector} alt=''/>
        </div>
        <div className='main-screen'>
            <div className='main-title'>
            We’re a <span>Creative </span> <br/>Digital Studio.
            </div>
            <div className='main-slogan'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br/> labore et dolore magna aliqua. Ut enim ad minim veniam.
            </div>
        </div>
        <List/>
    </div>
);

export default Home;