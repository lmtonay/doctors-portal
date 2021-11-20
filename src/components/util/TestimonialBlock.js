import React from 'react';
import { Col } from 'react-bootstrap';
import '../../styles/TestimonialBlock.css';

export default function TestimonialBlock({ name, image, location, message }) {
    return (
        <Col xs={12} md={4}>
            <div className="test-block">
                <p>{message}</p>
                <div className="identity-box d-flex">
                    <div className="img">
                        <img src={image} alt={name} />
                    </div>
                    <div className="text my-auto">
                        <h5>{name}</h5>
                        <h6>{location}</h6>
                    </div>
                </div>
            </div>
        </Col>
    );
};