import React, { Component } from 'react';
import './css/Input.css';
import db from '../configFirestore';
import {desayunos, almuerzos} from '../JSONS/desayunos.json';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' ,
                     desayunos,
                     almuerzos,
                     showBreakfast: false,
                     showLunch: false,
                    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showBreakfast = this.showBreakfast.bind(this);
        this.showLunch = this.showLunch.bind(this);
    }

    showBreakfast(){
        this.setState({
            ...this.state, showBreakfast: !this.state.showBreakfast
        })
    }
    showLunch(){
        this.setState({
            ...this.state, showLunch: !this.state.showLunch
        })
    }
    render() {
        const desayuno = this.state.desayunos.map((desayuno, i)=>{
            return <input key={i} type="button" value={desayuno.producto}/>
        })
        const almuerzo = this.state.almuerzos.map((almuerzo, i)=>{
            return <input key={i} type="button" value={almuerzo.producto}/>
        })
        return (
            <div className="inputName">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Cliente:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={this.showBreakfast}>Desayunos</button>
                    <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={this.showLunch}>Almuerzos</button>
                    {this.state.showBreakfast && desayuno}
                    {this.state.showLunch && almuerzo}
                    <input type="submit" value="Submit" />
                </form>
                <h2>{this.state.value}</h2>
                
            </div>

        )
    }
    

    handleChange(event) {  //
        this.setState({ value: event.target.value,
                        });
    }

   /*  handleClick(event){
        this.setState()
    } */
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