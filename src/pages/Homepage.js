import About from 'components/About';
import Blog from 'components/Blog';
import Contact from 'components/Contact';
import Doctors from 'components/Doctors';
import Footer from 'components/Footer';
import Header from 'components/Header';
import MakeAppointment from 'components/MakeAppointment';
import Services from 'components/Services';
import Testimonial from 'components/Testimonial';
import React from 'react';
import HeroBlocks from '../components/HeroBlocks';

export default function Homepage() {
    return (
        <div className='homepage'>
            <Header />
            <HeroBlocks />
            <Services />
            <About />
            <MakeAppointment />
            <Testimonial />
            <Blog />
            <Doctors />
            <Contact />
            <Footer />
        </div>
    );
};