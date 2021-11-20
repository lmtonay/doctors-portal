import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/Footer.css';
import Button from './util/Button';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';

export default function Footer() {
    const iconStyle ={
        fontSize: '40px',
        color: '#32d1d1'
    }
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <ul className="footer-list">
                            <li className="footer-heading">
                                <h5 className="link-text fw-bold" style={{ visibility: 'hidden' }}>Doctor Portal</h5>
                            </li>
                            <li className="footer-link">
                                <h6 className="link-text">Emergency Dental Care</h6>
                            </li>
                            <li className="footer-link">
                                <h6 className="link-text">Check up</h6>
                            </li>
                            <li className="footer-link">
                                <h6 className="link-text">Treatment of Personal Diseases</h6>
                            </li>
                            <li className="footer-link">
                                <h6 className="link-text">Tooth Extraction</h6>
                            </li>
                            <li className="footer-link">
                                <h6 className="link-text">Check up (P2)</h6>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <ul className="footer-list">
                            <li className="footer-heading">
                                <h5 className="link-text fw-bold">Services</h5>
                            </li>
                            <li className="footer-link">
                                <h6 className="link-text">Emergency Dental Care</h6>
                            </li>
                            <li className="footer-link">
                                <h6 className="link-text">Check up</h6>
                            </li>
                            <li className="footer-link">
                                <h6 className="link-text">Treatment of Personal Diseases</h6>
                            </li>
                            <li className="footer-link">
                                <h6 className="link-text">Tooth Extraction</h6>
                            </li>
                            <li className="footer-link">
                                <h6 className="link-text">Check up (P2)</h6>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <ul className="footer-list">
                            <li className="footer-heading">
                                <h5 className="link-text fw-bold">Oral Health</h5>
                            </li>
                            <li className="footer-link">
                                <h6 className="link-text">Emergency Dental Care</h6>
                            </li>
                            <li className="footer-link">
                                <h6 className="link-text">Check up</h6>
                            </li>
                            <li className="footer-link">
                                <h6 className="link-text">Treatment of Personal Diseases</h6>
                            </li>
                            <li className="footer-link">
                                <h6 className="link-text">Tooth Extraction</h6>
                            </li>
                            <li className="footer-link">
                                <h6 className="link-text">Check up (P2)</h6>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <ul className="footer-list">
                            <li className="footer-heading">
                                <h5 className="link-text fw-bold">Our Address</h5>
                            </li>
                            <li className="footer-link">
                                <h6 className="link-text">New York -101010 Hudson Yards</h6>
                            </li>
                            <li className="footer-link">
                                <div className='d-flex'>
                                    <FacebookRoundedIcon sx={iconStyle} />
                                    <TwitterIcon sx={iconStyle} />
                                    <HealthAndSafetyRoundedIcon sx={iconStyle} />
                                </div>
                            </li>
                            <li className="footer-link">
                                <div>
                                    <h6>Call Now</h6>
                                    <Button>+205550295</Button>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <h6 className="mt-5 text-center">&copy; 2021 : All rights reserved</h6>
            </Container>
        </footer>
    );
}