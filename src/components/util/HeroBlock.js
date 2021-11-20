import React from 'react';
import { Col } from 'react-bootstrap';
import '../../styles/HeroBlock.css';

export default function HeroBlock({ color, title, des, icon }) {
    return (
        <Col xs={12} lg={4}>
            <div style={{ backgroundColor: color }} className='hero-block'>
                <div className="icon-box">
                    <img src={icon} alt={title} />
                </div>
                <div className="text-box">
                    <div className="text">
                        <h6>{title}</h6>
                        <p><small>{des}</small></p>
                    </div>
                </div>
            </div>
        </Col>
    );
};