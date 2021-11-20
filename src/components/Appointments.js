import appointmentData from 'data/appointmentData';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Appointment from './Appointment';

export default function Appointments({ date }) {
    return (
        <div className="my-5">
            <Container>
                <h2 style={{ color: '#32d1d1' }} className="text-center fw-bold">Available Appointments on {date.toDateString()}</h2>
                <Row className="mt-5">
                    {
                        appointmentData.map(data => <Appointment key={data.id} data={data} date={date} />)
                    }
                </Row>
            </Container>
        </div>
    );
}