import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';


export default function NavbarComponent () {
    return (
        <>
        <Navbar bg="light" variant="light" className="navbar pt-3 pb-3">
            <Navbar.Brand  style={{ fontSize: 25 }} href="/">Navbar Brand</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Nav className="right" style={{ fontSize: 25 }}>
                <Nav.Link href="/add">+ Add Event</Nav.Link>
                <Nav.Link href="/">Dashboard</Nav.Link>
            </Nav>
        </Navbar>
        </>
    )
}