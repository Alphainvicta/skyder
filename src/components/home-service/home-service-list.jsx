import React from 'react'
import Hservice from './home-service.jsx'
import iservice1 from '../../images/img1.png';
import iservice2 from '../../images/img2.png';
import iservice3 from '../../images/img3.png';
import iservice4 from '../../images/img4.png';

class Homelist extends React.Component {
    constructor() {
        super();
        this.state = {
            services : [{
                title : 'Brand & Digital',
                description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                image : iservice1,
                link : '/services/brand_&_digital',
                id : 0
            },
            {
                title : 'Graphic Design',
                description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                image : iservice2,
                link : '/services/graphic_design',
                id : 1
            },
            {
                title : 'Advertising',
                description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                image : iservice3,
                link : '/services/advertising',
                id : 2
            },
            {
                title : 'Visual Identity',
                description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                image : iservice4,
                link : '/services/visual_identity',
                id : 3
            }]
        }
    }
    render() {
        return (    
            this.state.services.map(({ id, ...servicesprops }) => (
                    <Hservice key={ id } { ...servicesprops } />
            ))
        )
    }
}

export default Homelist;