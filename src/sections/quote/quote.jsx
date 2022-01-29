import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './quote.scss';

import { ReactComponent as Calendar } from '../../icons/Calendar.svg';
import { ReactComponent as Map } from '../../icons/Map.svg';

import Input from '../../components/input/input';
import Button from '../../components/button/button.jsx';
import Textarea from '../../components/textarea/textarea.jsx';
import Qcardlist from '../../components/quality-card/quality-card-list.jsx';

export const Quote = () => {
    const [visible, setVisible] = useState(false);
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
            <div className='step-one'>
                <div className='select-service-cont'>
                    <div className='title'>
                        Select services
                    </div>
                    <div className='services'>
                        <Input id='service1' name='services' value='service1' type='checkbox' label='Service 1'/>
                        <Input id='service2' name='services' value='service2' type='checkbox' label='Service 2'/>
                        <Input id='service3' name='services' value='service3' type='checkbox' label='Service 3'/>
                        <div className='input-cont'>
                            <input onClick={() => setVisible(!visible)} id='service4' name='services' value='service4' type="checkbox"/>
                            <label>Service 4</label>
                        </div>
                        <Input id='service5' name='services' value='service5' type='checkbox' label='Service 5'/>
                        <Input id='service6' name='services' value='service6' type='checkbox' label='Service 6'/>
                        <Input id='service7' name='services' value='service7' type='checkbox' label='Service 7'/>
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
            {visible && 
                <>
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
                </>
            }
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
                            <Input id='yes' name='location' value='yes' type='radio' label='Yes' />
                            <Input id='no' name='location' value='no' type='radio' label='No' />
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
                    <Button text='Submit'/>
                </div>
            </div>
        </form>
    </div>
);
};

export default Quote;