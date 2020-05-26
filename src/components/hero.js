import React from 'react';
import '../assets/css/hero.scss';
import imgIzq from '../assets/images/pozole.png';
import imgDch from '../assets/images/tacos.png'
import { Row, Col, Button } from 'react-bootstrap';

class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <Row>
                    <Col>
                        <img className="img_izq" src={imgIzq} alt="img_pozole"/>
                    </Col>
                    <Col xs="8" lg="5">
                        <div className="center">
                            <div>
                                <h2>Compra tu comida y recibe hasta tu casa</h2>
                            </div>
                            <div>
                                <hr/>
                                    <p> Consulta nuestro menú </p>
                                    <Button variant="danger">Ir al menú</Button>
                                <hr/>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <img className="img_dch"  src={imgDch} alt="img_tacos"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Hero;