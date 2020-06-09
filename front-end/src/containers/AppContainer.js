import React, { Component } from 'react';
import { Container } from "reactstrap";
import Header from "./../components/Header";
import Titulo from "./../components/Titulo";
import Footer from "./../components/Footer";
import Cadastro from "./../components/Cadastro";
import Lista from "./../components/Lista";
import Busca from "./../components/Busca";
import { lista_dados } from "./../components/utils/lista_dados";

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itens: []
    }
  }

  componentDidMount() {
    this.setState({ itens: lista_dados });
  }

  onAdd = (item) => {
    const { itens } = this.state;
    this.setState({ itens: [item, ...itens] });
  };
  
  onRemove = (index) => {
    const { itens } = this.state;
    this.setState({ itens: itens.filter((element, i) => i !== index) });
  };

  render() {
    const { itens } = this.state;

    return (
      <Container>
        <Header />
        <Titulo />
        <Cadastro
          onAdd={this.onAdd}
        />
        <Busca />
        <Lista
          onRemove={this.onRemove}
          itens={itens}
        />
        <Footer />
      </Container>
    );
  }
}

export default AppContainer;
