import React from 'react'
import Service from './service.jsx'
import iservice1 from '../../images/img1.png';
import iservice2 from '../../images/img2.png';
import iservice3 from '../../images/img3.png';
import iservice4 from '../../images/img4.png';


class Servicelist extends React.Component{
    constructor() {
        super();
        this.state = {
            services : [{
                title : 'Brand & Digital',
                description : `Lorem ipsum dolor sit amet conse ctetur adipiscing elit`,
                image : iservice1,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                cost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                additional: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                link : '/services/brand_&_digital',
                id : 0
            },
            {
                title : 'Graphic Design',
                description : 'Lorem ipsum dolor sit amet conse ctetur adipiscing elit',
                image : iservice2,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                cost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                additional: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                link : '/services/graphic_design',
                id : 1
            },
            {
                title : 'Advertising',
                description : 'Lorem ipsum dolor sit amet conse ctetur adipiscing elit',
                image : iservice3,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                cost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                additional: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                link : '/services/advertising',
                id : 2
            },
            {
                title : 'Visual Identity',
                description : 'Lorem ipsum dolor sit amet conse ctetur adipiscing elit',
                image : iservice4,
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                cost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                additional: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
                link : '/services/visual_identity',
                id : 3
            }]
        }
    }

    render() {
        console.log(this.props.path.pathname)
        const service = this.state.services.find(service => service.link === this.props.path.pathname)
        if (service) {
            return <Service {...service} />
        }
        else{
            return null
        }
      }
}

export default Servicelist;