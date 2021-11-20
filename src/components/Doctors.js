import doctorsData from 'data/doctorsData';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../styles/Doctors.css';
import Doctor from './Doctor';

export default function Doctors() {
    return (
        <div className="doctors py-5">
            <Container>
                <h5 className='section-header mb-5'>Doctors</h5>
                <Row>
                    {
                        doctorsData.map(doctor => <Doctor name={doctor.name} image={doctor.image} key={doctor.id} number={doctor.number} />)
                    }
                </Row>
            </Container>
        </div>
    );
};