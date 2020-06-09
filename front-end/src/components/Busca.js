import React from 'react';
import { Row, Col, ListGroup, ListGroupItem, InputGroupText, InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import SearchIcon from '@material-ui/icons/Search';

function Busca({ onChangeBusca }) {
    return (
        <ListGroup>
            <ListGroupItem>
                <Row>
                    <Col xs="12" sm="12" md="12">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <SearchIcon />
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" name="busca" placeholder="Busca" onChange={onChangeBusca} />
                            <InputGroupAddon addonType="append">
                                <Button type="button">Busca</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
            </ListGroupItem>
        </ListGroup>
    );
}

export default Busca;