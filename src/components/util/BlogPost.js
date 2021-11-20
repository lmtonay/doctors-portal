import React from 'react';
import { Col } from 'react-bootstrap';
import '../../styles/BlogPost.css';

export default function BlogPost({ name, image, des, title, date }) {
    return (
        <Col xs={12} md={4}>
            <div className='blogpost'>
                <div className="identity d-flex">
                    <div className="img me-5">
                        <img className='w-100' src={image} alt={name} />
                    </div>
                    <div className="text my-auto">
                        <h6>{name}</h6>
                        <p><small>{date}</small></p>
                    </div>
                </div>
                <div className="content mt-5">
                    <h5 className='mb-3'>{title}</h5>
                    <p>{des}</p>
                </div>
            </div>
        </Col>
    );
};