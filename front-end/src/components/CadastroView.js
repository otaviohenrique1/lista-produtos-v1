import React, { Component } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./../App.css";
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';

export default class CadastroView extends Component {
    render() {
        const { onChange, onSubmit, onClear, nome, quantidade } = this.props;
        
        return (
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Row>
                        <Col xs="12" sm="12" md="12">
                            <Label htmlFor="nome">Nome</Label>
                            <Input type="text" onChange={onChange} value={nome} name="nome" id="nome" placeholder="Digite o nome" required={true} />
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <Row>
                        <Col xs="12" sm="12" md="12">
                            <Label htmlFor="quantidade">Quantidade</Label>
                            <Input type="text" onChange={onChange} value={quantidade} name="quantidade" id="quantidade" placeholder="Digite a quantidade" required={true} />
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup className="area-botoes">
                    <Row>
                        <Col xs="12" sm="12" md="12">
                            <Button color="primary" type="submit">
                                <AddIcon /> Salvar
                            </Button>
                            <Button color="danger" type="button" onClick={() => onClear()}>
                                <ClearIcon /> Limpar
                            </Button>
                        </Col>
                    </Row>
                </FormGroup>
            </Form>
        );
    }
}