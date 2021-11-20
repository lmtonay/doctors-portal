import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Contact.css';
import Button from './util/Button';

export default function Contact() {
    return (
        <div className='contact mt-5 text-center text-light'>
            <div className="mask">
                <Container>
                    <h5 className="section-title">Contact Us</h5>
                    <h1>Always Connect with us</h1>
                    <form className='mt-5'>
                        <input type="email" className='form-control shadow-none' required placeholder="Email Address" />
                        <input type="text" className='form-control shadow-none' required placeholder="Subject" />
                        <textarea className='form-control shadow-none' required placeholder="Message"></textarea>
                        <Button style={{padding: '10px 80px'}} onClick={e => e.preventDefault()}>Submit</Button>
                    </form>
                </Container>
            </div>
        </div>
    );
};