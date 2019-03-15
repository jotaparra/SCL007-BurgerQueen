import React, { Component } from 'react';
import './css/Input.css';
import db from '../configFirestore';
import {desayunos} from '../JSONS/desayunos.json';




class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="inputName">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Cliente:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <h2>{this.state.value}</h2>
                {console.log(desayunos)}
            </div>

        )
    }
    handleChange(event) {  //
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {   //mostrar el cambio
        event.preventDefault();//para que la página no se recarge completamente
        this.setState({
            value:'',
        })
        db.collection('Pedidos').add({
            Cliente: this.state.value,          
        }).then(()=>{
            console.log('Cliente agregado')
        }).catch(()=>{
            console.log('Error')
        })
    }
}
export default Input;