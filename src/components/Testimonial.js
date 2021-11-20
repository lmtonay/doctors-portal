import testimonialData from 'data/testimonialData';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../styles/Testimonial.css';
import TestimonialBlock from './util/TestimonialBlock';

export default function Testimonial() {
    return (
        <div className='testimonial'>
            <Container>
                <h5>Testimonial</h5>
                <div className="w-50 mb-5">
                    <h1 className='my-3'>What's Our Patients Says</h1>
                </div>
                <Row>
                    {
                        testimonialData.map(data => <TestimonialBlock name={data.name} message={data.speech} key={data.id} image={data.image} location={data.location} />)
                    }
                </Row>
            </Container>
        </div>
    );
};