import React from 'react';
import { Row, Col, ListGroup, ListGroupItem, Label } from "reactstrap";

export default function Footer() {
    return (
        <footer className="rodape">
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroupItem>
                            <Label>&copy;Copyright 2020 - Otavio Henrique</Label>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </footer>
    );
}