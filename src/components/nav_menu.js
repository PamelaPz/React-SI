import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/css/nav_menu.scss';
import { Nav } from 'react-bootstrap';

import { faPizzaSlice, faBacon, faHotdog, faMugHot, faWineBottle, faBirthdayCake } from '@fortawesome/free-solid-svg-icons'

class Menu extends React.Component {
    render() {
        return(
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item id="color1">
                    <Nav.Link href="/home">
                        <div className="icon">
                            <FontAwesomeIcon icon={faMugHot} />
                        </div>
                        Pozole
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item id="color2">
                    <Nav.Link eventKey="link-1">
                        <div className="icon">
                            <FontAwesomeIcon icon={faBacon} />
                        </div>
                        Tacos
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item id="color3">
                    <Nav.Link eventKey="link-2">
                        <div className="icon">
                            <FontAwesomeIcon icon={faPizzaSlice} />
                        </div>
                        Pizza
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item id="color4">
                    <Nav.Link eventKey="link-3">
                        <div className="icon">
                            <FontAwesomeIcon icon={faHotdog} />
                        </div>
                        Hot Dog
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item id="color5">
                    <Nav.Link eventKey="link-3"> 
                        <div className="icon">
                            <FontAwesomeIcon icon={faWineBottle}/>
                        </div>
                        Bebidas
                    </Nav.Link >
                </Nav.Item>
                <Nav.Item id="color6">
                    <Nav.Link eventKey="link-3">
                        <div className="icon">
                            <FontAwesomeIcon icon={faBirthdayCake} />
                        </div>
                        Postres
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        );
    }
}

export default Menu;