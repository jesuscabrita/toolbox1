import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export const Menu = () => {
    return (
        <Navbar bg="danger" expand="lg">
            <Container>
                <Navbar.Brand href="/" style={{ color: 'white' }}>React Test App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* sin rutas */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}