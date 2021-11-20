import React from 'react';
import { Col } from 'react-bootstrap';

export default function Doctor({ name, image, number }) {
    return (
        <Col className="text-center" xs={12} md={4}>
            <div>
                <img src={image} alt={name} width='100%' className="mb-3" />
                <h5 style={{fontWeight: 'bold'}}>{name}</h5>
                <h6><small>{number}</small></h6>
            </div>
        </Col>
    );
};