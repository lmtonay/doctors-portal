import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/MakeAppointment.css';
import doctor from "../images/doctor.png";
import Button from './util/Button';
import { Link } from 'react-router-dom';

export default function MakeAppointment() {
    return (
        <div className='make-appointment'>
            <div className="mask py-5" style={{ backgroundColor: '#3A4256F5', minHeight: '500px' }}>
                <Container>
                    <Row>
                        <Col xs={12} md={5}>
                            <img className='ma-doctor-img' src={doctor} alt='doctor' width="100%" />
                        </Col>
                        <Col xs={12} md={7}>
                            <div style={{ minHeight: 'calc(500px - 6rem)' }} className="d-flex align-items-center justify-content-center">
                                <div className='w-100 text-start'>
                                    <h5 style={{ color: '#1CC7C1' }}>APPOINTMENT</h5>
                                    <h1 className="text" style={{ margin: '20px 0' }}>Make an appointment Today</h1>
                                    <p style={{ margin: '30px 0' }}>
                                        It is a long established fact that a reader will be distractedby the readable content of a page when looking at its
                                    </p>
                                    <Link to="/appointment"><Button>Learn More</Button></Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};