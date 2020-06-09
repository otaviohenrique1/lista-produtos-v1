import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from "reactstrap";
import ItemLista from "./ItemLista";

export default class Lista extends Component {
    render() {
        const { itens, onRemove } = this.props;

        return (
            <ListGroup>
                <ListGroupItem>
                    <ListGroup>
                        {itens.map((item, index) => (
                            <ItemLista key={index} index={index} item={item} onRemove={onRemove} />
                        ))}
                    </ListGroup>
                </ListGroupItem>
            </ListGroup>
        );
    }
}