import React, { useState } from 'react';
import './nav.scss';
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as Behance } from '../../icons/behance.svg';
import { ReactComponent as Instagram } from '../../icons/bxl-instagram-alt.svg';
import { ReactComponent as Burguer } from '../../icons/burguer.svg';
import { ReactComponent as Bclose } from '../../icons/burguerclose.svg';

const Nav = () => {
    const [visible, setVisible] = useState(false);
    
    return(
    <div className='nav-cont'>
        <div className='logo-icon'>
            <Link to="/"> <Logo/> </Link>
        </div>
        <a className='instagram' href='https://www.instagram.com/skydergdl/' target='_blank' rel='noreferrer'><Instagram/></a>
        <a className='behance' href='https://www.behance.net/skyder' target='_blank' rel='noreferrer'><Behance/></a>
        <div className='burguer'>
            <button onClick={() => setVisible(true)}><Burguer/></button>
        </div>
        {visible && 
        <div className='burgernav-cont'>
            <div className='Home-link'>
                <Link to="/"> Home </Link>
            </div>
            <div className='services-links'>
                <Link to="/services/brand_&_digital"> Brand & Digital </Link>
                <Link to="/services/graphic_design"> Graphic Design </Link>
                <Link to="/services/advertising"> Advertising </Link>
                <Link to="/services/visual_identity"> Visual Identity </Link>
            </div>
            <div className='quote-link'>
                <Link to="/quote"> Quote </Link>
            </div>
            <div className='burguer'>
                <button onClick={() => setVisible(false)}><Bclose/></button>
            </div>
        </div>
        }
    </div>)
}

export default Nav;