import React, { Component } from 'react';

class Boton extends Component {
    constructor(props) {
      super(props)
      this.generarAleatorios = this.generarAleatorios.bind(this);
      this.state = {
        numeros: []
      }
    }
    render() {
        return (
          <div>
            <p>Números aleatorios:</p>
            {this.state.numeros.map((num)=>
              { return (<p>{num}</p>); 
              }
            )}
            <button onClick={this.generarAleatorios}>Generar números aleatorios</button>
          </div>
        );
      }
    generarAleatorios() {
        const vec=new Array(5)
        for(let x=0; x<vec.length; x++)
          vec[x]=Math.trunc(Math.random()*10);
        this.setState( {
          numeros: vec
        })
      }
  }
  
  export default Boton;