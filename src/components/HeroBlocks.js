import blockData from 'data/blockData';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import HeroBlock from './util/HeroBlock';
import '../styles/HeroBlocks.css';

export default function HeroBlocks() {
    return (
        <div className='hero-blocks'>
            <Container>
                <Row>
                    {
                        blockData.map(data => <HeroBlock key={data.id} color={data.col} title={data.title} des={data.des} icon={data.icon} />)
                    }
                </Row>
            </Container>
        </div>
    );
};