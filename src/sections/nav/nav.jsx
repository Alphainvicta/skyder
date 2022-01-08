import React from 'react';
import './nav.scss';

import { ReactComponent as Facebook } from '../../icons/facebook.svg';
import { ReactComponent as Twitter } from '../../icons/twitter.svg';
import { ReactComponent as Instagram } from '../../icons/bxl-instagram-alt.svg';
import { ReactComponent as Burguer } from '../../icons/burguer.svg';

const Nav = () => (
    <div className='nav-cont'>
        <div className='logo-icon'>
            skyder
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