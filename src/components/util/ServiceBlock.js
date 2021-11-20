import React from 'react';
import { Col } from 'react-bootstrap';
import '../../styles/ServiceBlock.css';

export default function ServiceBlock({ image, title, des }) {
    return (
        <Col className='text-center' lg={4} xs={12}>
            <div className='s-block'>
                <img width='20%' className='mb-4' src={image} alt={title} />
                <div className='text-box px-5'>
                    <h6>{title}</h6>
                    <p><small>{des}</small></p>
                </div>
            </div>
        </Col>
    );
};