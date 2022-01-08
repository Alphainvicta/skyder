import React from 'react';
import './home.scss';
import Hservice from '../../components/home-service/home-service.jsx';

const Home = () => (
    <div className='home-cont'>
        <div className='main-screen'>
            <div className='main-title'>
                casita
            </div>
            <div className='main-slogan'>
                la joya
            </div>
        </div>
        <Hservice/>
        <Hservice/>
        <Hservice/>
        <Hservice/>
    </div>
);

export default Home;