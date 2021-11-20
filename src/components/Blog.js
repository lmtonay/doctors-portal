import blogData from 'data/blogData';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../styles/Blog.css';
import BlogPost from './util/BlogPost';

export default function Blog () {
    return (
        <div className='blog my-5 pb-5'>
            <Container>
                <h5 className='section-title'>OUR BLOG</h5>
                <h1 className='section-bio'>From our blog news</h1>
                <Row>
                    {
                        blogData.map(data=><BlogPost name={data.name} image={data.image} des={data.des} title={data.speech} date={data.date} key={data.id} />)
                    }
                </Row>
            </Container>
        </div>
    );
};