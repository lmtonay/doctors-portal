import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/Dashboard.css';

export default function Dashboard() {
    return (
        <Container className="dashboard" fluid>
            <Row>
                <Col xs={12} md={3} className='menu'>
                    <div className="menu-items m-2">
                        <h5 className="my-4"><FontAwesomeIcon icon={faChartLine} /> Dashboard</h5>
                        <h5 className="my-4"><FontAwesomeIcon icon={faCalendarCheck} /> Appointments</h5>
                        <h5 className="my-4"><FontAwesomeIcon icon={faChartLine} /> Dashboard</h5>
                        <h5 className="my-4"><FontAwesomeIcon icon={faChartLine} /> Dashboard</h5>
                        <h5 className="my-4"><FontAwesomeIcon icon={faChartLine} /> Dashboard</h5>
                    </div>
                </Col>
                <Col xs={12} md={9} className='content'>
                    <div>

                    </div>
                </Col>
            </Row>
        </Container>
    );
}