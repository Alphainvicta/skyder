import React from 'react';
import './nav.scss';
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as Facebook } from '../../icons/facebook.svg';
import { ReactComponent as Twitter } from '../../icons/twitter.svg';
import { ReactComponent as Instagram } from '../../icons/bxl-instagram-alt.svg';
import { ReactComponent as Burguer } from '../../icons/burguer.svg';

const Nav = () => (
    <div className='nav-cont'>
        <div className='logo-icon'>
          <Link to="/"> <Logo/> </Link>
        </div>
        <div className='facebook'>
            <Facebook/>
        </div>
        <div className='instagram'>
            <Twitter/>
        </div>
        <div className='behance'>
            <Instagram/>
        </div>
        <div className='burguer'>
            <Burguer/>
        </div>
    </div>
);

export default Nav;