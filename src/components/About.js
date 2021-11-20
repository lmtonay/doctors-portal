import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../images/about.png';
import Button from './util/Button';
import '../styles/About.css';

export default function About() {
    return (
        <div className='my-5 py-5'>
            <Container>
                <Row>
                    <Col xs={12} md={5}>
                        <img src={about} className='img-fluid' alt='about section' />
                    </Col>
                    <Col  xs={12} md={7} className='p-5'>
                            <h2>Exceptional Dental Care, on Your Terms</h2>
                            <p className='my-5' style={{color: '#B4B4B4', lineHeight: '30px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur tempore illum asperiores aliquam quis, nisi in explicabo! Vero repellendus eius earum rem, nostrum maxime magni cupiditate, vel unde quod ad laudantium, excepturi dolorem? Quibusdam animi deserunt temporibus totam nemo tempore aut, beatae, incidunt, repellendus earum quo odio unde maxime rem.</p>
                            <Button>Learn More</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};