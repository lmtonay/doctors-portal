import React from 'react';
import Menubar from 'components/Menubar';
import '../styles/Header.css';
import Hero from './Hero';

export default function Header() {
    return (
        <div className='homepage'>
                <Menubar isHome={true} />
                <Hero />
                <div className='right-color'></div>
        </div>
    );
};