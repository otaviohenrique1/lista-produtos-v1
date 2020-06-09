import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavbarBrand, Collapse, Label, Button, NavbarToggler } from "reactstrap";
import "./../App.css";
import ListAltIcon from '@material-ui/icons/ListAlt';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    
    toogle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const { open } = this.state;

        return (
            <header>
                <Navbar className="bg-blue-custom" light expand="md">
                    <NavbarBrand>
                        <ListAltIcon fontSize="large"/>
                        <Label className="nav-titulo">Lista de produtos</Label>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toogle}/>
                    <Collapse isOpen={open} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button color="secondary">Cadastro</Button>
                            </NavItem>
                            <NavItem>
                                <Button color="secondary">Lista</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}