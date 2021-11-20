import { Container, Row } from 'react-bootstrap';
import '../styles/AppointmentCalendar.css';
import Calendar from 'react-calendar';
import image from '../images/hero-image.png';
import React from 'react';

export default function AppointmentCalendar({ date }) {

    const [value, onChange] = date;

    return (
        <section className="appointment-cal-container">
            <div className="mask py-5">
                <Container>
                    <Row>
                        <div className="col-md-6 col-12">
                            <h1 className="fw-bold">Appointment</h1>
                            <Calendar
                                className="my-5"
                                onChange={onChange}
                                value={value}
                            />
                        </div>
                        <div className="col-md-6 col-12">
                            <img src={image} alt="OT" className="img-fluid" />
                        </div>
                    </Row>
                </Container>
            </div>
        </section>
    );
}