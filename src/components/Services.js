import serviceData from 'data/serviceData';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../styles/Services.css';
import ServiceBlock from './util/ServiceBlock';

export default function Services() {
    return (
        <Container>
            <div className='services my-5 py-5 text-center'>
                <h5>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
                <Row className='mt-5 pt-5'>
                    {
                        serviceData.map(service => <ServiceBlock image={service.image} key={service.id} title={service.title} des={service.des} />)
                    }
                </Row>
            </div>
        </Container>
    );
};