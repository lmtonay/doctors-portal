import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/Hero.css';
import image from '../images/hero-image.png';
import Button from './util/Button';
import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <div className='hero'>
            <Container>
                <Row>
                    <Col className="mb-4 text-center text-lg-start" xs={12} lg={5}>
                        <div className='titles'>
                            <h1 className='mb-3 title'>Your New Smile</h1>
                            <h1 className="title">Starts Here</h1>
                        </div>
                        <p className='bio'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the
                        </p>
                        <Link to="/appointment"><Button>Get appointment</Button></Link>
                    </Col>
                    <Col xs={12} lg={7}>
                        <img src={image} alt='Patient bed' width='100%' />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};