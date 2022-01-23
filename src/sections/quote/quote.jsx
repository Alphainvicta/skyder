import React from 'react';
import './quote.scss';
import Top from '../../hooks/top/top.jsx';

import { ReactComponent as Calendar } from '../../icons/Calendar.svg';
import { ReactComponent as Map } from '../../icons/Map.svg';

import Input from '../../components/input/input';
import Button from '../../components/button/button.jsx';
import Radio from '../../components/radio/radio.jsx';
import Checkbox from '../../components/checkbox/checkbox.jsx';
import Textarea from '../../components/textarea/textarea.jsx';
import Qcardlist from '../../components/quality-card/quality-card-list.jsx';

const Quote = () => (
    <div className='quote-cont'>
        <Top/>
        <div className='step-one'>
            <div className='select-service-cont'>
                <div className='title'>
                    Select services
                </div>
                <div className='services'>
                    <Checkbox id='checkbox1' name='services' value='Lorem ipsum dolor'/>
                    <Checkbox id='checkbox2' name='services' value='Duis aute irure dolor in reprehenderit'/>
                    <Checkbox id='checkbox3' name='services' value='Deserunt mollit anim'/>
                    <Checkbox id='checkbox4' name='services' value='Culpa qui officia'/>
                    <Checkbox id='checkbox5' name='services' value='Excepteur sint occaecat'/>
                    <Checkbox id='checkbox6' name='services' value='Laboris nisi ut aliquip'/>
                    <Checkbox id='checkbox7' name='services' value='Ut enim ad minim veniam'/>
                </div>
            </div>
            <div className='details-cont'>
                <div className='details'>
                    Extra details
                </div>
                <Textarea id='textarea1' name='services' value='services details'/>
            </div>
        </div>
        <hr/>
        <div className='step-two'>
            <div className='quality-cont'>
                <div className='title'>
                    Output Quality
                </div>
                <div className='cards-cont'>
                    <Qcardlist />
                </div>
                <div className='cards-radio'>
                </div>
            </div>
        </div>
        <hr/>
        <div className='step-three'>
            <div className='title'>
                Operation Details
            </div>
            <div className='details-cont'>
                <div className='date-cont'>
                    <Calendar />
                    <div className='date-title'>
                        Date
                    </div>

                    <Textarea id='textarea3' name='fecha' value='date of recording'/>
                </div>
                <div className='location-cont'>
                    <Map />
                    <div className='in-zone'>
                        within metro area?
                    </div>
                    <div className='location-options'>
                        <Radio id='yes' name='location' value='yes'/>
                        <Radio id='no' name='location' value='no'/>
                    </div>
                    <div className='location-details'>
                        Extra details
                    </div>
                    <Textarea id='textarea3' name='services' value='location details'/>
                </div>
            </div>
        </div>
        <hr/>
        <div className='step-four'>
            <div className='title'>
                Contact
            </div>
            <div className='contact-cont'>
                <div className='number'>
                    <div className='number-text'>
                        Number
                    </div>
                    <Input id='input1' name='number' value='Phone number' type='text'/>
                </div>
                <div className='email'>
                    <div className='email-text'>
                        Email
                    </div>
                    <Input id='input2' name='Email' value='Email' type='email'/>
                </div>
            </div>
            <div className='send-cont'>
                <div className='send-text'>
                    I want to contact an Executive
                </div>
                <Button text='Submit'/>
            </div>
        </div>
    </div>
);

export default Quote;