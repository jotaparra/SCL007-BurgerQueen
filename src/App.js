import React, { Component } from 'react';
import './App.css';


//Components
import Header from './components/Header';
import Input from './components/Input';
import Boton from './components/Boton';
import Tabla from './components/Tabla';
import Dado from './components/Dados';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor1: this.generarValor(),
      valor2: this.generarValor(),
      valor3: this.generarValor()
    }
    this.tirar = this.tirar.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Input />
          <Boton />
          <Tabla />
        <div>
            <Dado valor={this.state.valor1} />
            <Dado valor={this.state.valor2} />
            <Dado valor={this.state.valor3} />
            <button onClick={this.tirar}>Tirar</button>
          </div>
        </div>
      </div>
    );
  }

  tirar() {
    this.setState({
      valor1: this.generarValor(),
      valor2: this.generarValor(),
      valor3: this.generarValor()
    });
  }

  generarValor() {
    return Math.trunc(Math.random() * 6) + 1;
  }
}

export default App;

//aqui manejar un Json con los menús y transmitirlos en cascada a los hijos o algo así, a traves de props