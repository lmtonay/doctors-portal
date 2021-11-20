import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Menubar.css';

export default function Menubar({ isHome }) {
    return (
        <Navbar className='navbar' expand="lg">
            <Container>
                <Link className='nav-brand' to='/'>Doctors Portal</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-item' to="/">Home</Link>
                        <Link className='nav-item' to="/">About</Link>
                        <Link className='nav-item' to="/">Dental Services</Link>
                        <Link className={`nav-item ${isHome && 'text-light'}`} to="/">Reviews</Link>
                        <Link className={`nav-item ${isHome && 'text-light'}`} to="/">Blog</Link>
                        <Link className={`nav-item ${isHome && 'text-light'}`} to="/">Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};