import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
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

export const Quote = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('contact-form', 'form-template', form.current, 'user_FairUAzw3Rg7FNhBSDodv')
        .then((result) => {
            alert("enviado exitosamente")
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
    <div className='quote-cont'>
        <form ref={form} onSubmit={sendEmail}>
            <Top/>
            <div className='step-one'>
                <div className='select-service-cont'>
                    <div className='title'>
                        Select services
                    </div>
                    <div className='services'>
                        <Checkbox id='service1' name='services' value='service1'/>
                        <Checkbox id='service2' name='services' value='service2'/>
                        <Checkbox id='service3' name='services' value='service3'/>
                        <Checkbox id='service4' name='services' value='service4'/>
                        <Checkbox id='service5' name='services' value='service5'/>
                        <Checkbox id='service6' name='services' value='service6'/>
                        <Checkbox id='service7' name='services' value='service7'/>
                    </div>
                </div>
                <div className='details-cont'>
                    <div className='details'>
                        Extra details
                    </div>
                    <Textarea id='service-detail' name='service-detail' value='services details'/>
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
                        <Textarea id='date' name='date' value='date of recording'/>
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
                        <Textarea id='locationdetails' name='locationdetails' value='location details'/>
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
                        <Input id='number' name='number' value='Phone number' type='text'/>
                    </div>
                    <div className='email'>
                        <div className='email-text'>
                            Email
                        </div>
                        <Input id='email' name='email' value='Email' type='email'/>
                    </div>
                </div>
                <div className='send-cont'>
                    <div className='send-text'>
                        I want to contact an Executive
                    </div>
                    <Button text='submit'/>
                </div>
            </div>
        </form>
    </div>
);
};

export default Quote;