import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from "reactstrap";
import CadastroView from "./CadastroView";

export default class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            quantidade: ''
        };
    }

    onChange = ({ target }) => {
        const { value, name } = target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd(this.state);
        this.onClear();
    }

    onClear = () => {
        this.setState({
            nome: '',
            quantidade: ''
        });
    }

    render() {
        const { nome, quantidade } = this.state;
        
        return (
            <ListGroup>
                <ListGroupItem>
                    <CadastroView
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                        onClear={this.onClear}
                        nome={nome}
                        quantidade={quantidade}
                    />
                </ListGroupItem>
            </ListGroup>
        );
    }
}