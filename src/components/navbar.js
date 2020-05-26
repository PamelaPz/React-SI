import React from 'react';
import '../assets/css/navbar.scss';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="#home">Food2Go</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#menu">Menú</Nav.Link>
                        <Nav.Link href="#catalogo">Catálogo</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#carrito">Carrito</Nav.Link>
                        <Nav.Link href="#memes"> CARRITO_ICON </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;