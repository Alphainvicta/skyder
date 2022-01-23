import React from 'react';
import Qcard from './quality-card.jsx';
import Radio from '../radio/radio.jsx';
import video1 from '../../videos/simple.mkv';
import video2 from '../../videos/standard.mkv';
import video3 from '../../videos/special.mkv';

class Qcardlist extends React.Component {
    constructor() {
        super();
        this.state = {
            cards : [{
                title : 'BASIC',
                video : video1,
                detail1: 'Lorem ipsum dolor sit',
                detail2: 'Amet  consectetur',
                detail3: 'Adipiscing elit  sed',
                detail4: 'Eiusmod  tempor incididunt',
                radio: 'radio1',
                id : 0
            },
            {
                title : 'STANDARD',
                video : video2,
                detail1: 'Lorem ipsum dolor sit',
                detail2: 'Amet  consectetur',
                detail3: 'Adipiscing elit  sed',
                detail4: 'Eiusmod  tempor incididunt',
                radio: 'radio2',
                id : 0
            },
            {
                title : 'PREMIUM',
                video : video3,
                detail1: 'Lorem ipsum dolor sit',
                detail2: 'Amet  consectetur',
                detail3: 'Adipiscing elit  sed',
                detail4: 'Eiusmod  tempor incididunt',
                radio: 'radio3',
                id : 0
            }
            ]
        }
    }
    render() {
        return (    
            this.state.cards.map(({ id, ...cardsprops }) => (
                <>
                    <Qcard key={ id } { ...cardsprops } />
                    <Radio id={this.state.cards.radio} name='cards-radio' value='Choose package'/>
                </>
            ))
        )
    }
}

export default Qcardlist;