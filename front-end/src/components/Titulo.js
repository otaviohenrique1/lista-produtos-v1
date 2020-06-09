import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";

export default function Titulo() {
    return (
        <Row>
            <Col>
                <ListGroup>
                    <ListGroupItem>
                        <h1 className="text-center mt-3 mb-3 titulo-pagina">Lista de produtos</h1>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </Row>
    );
}