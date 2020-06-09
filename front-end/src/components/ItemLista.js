import React from 'react';
import { Row, Col, ListGroupItem, Button } from "reactstrap";
import "./../App.css";
import DeleteIcon from '@material-ui/icons/Delete';

export default function ItemLista({ index, item, onRemove }) {
    return (
        <ListGroupItem>
            <Row className="area-produto">
                <Col xs="1" sm="1" md="1" className="area-index">
                    {index}
                </Col>
                <Col xs="8" sm="8" md="8" className="area-produto-dados">
                    <Row>
                        <Col xs="12" sm="12" md="12">{item.nome}</Col>
                        <Col xs="12" sm="12" md="12">{item.quantidade}</Col>
                    </Row>
                </Col>
                <Col xs="3" sm="3" md="3" className="area-produto-botao">
                    <Button type="button" color="danger" onClick={() => onRemove(index)}>
                        <DeleteIcon /> Remover
                    </Button>
                </Col>
            </Row>
        </ListGroupItem>
    );
}