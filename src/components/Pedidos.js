import React, { Component } from 'react';
import db from '../configFirestore';

class Pedidos extends Component {

    state = {
    Cliente: [] 
}


componentDidMount(){
    db.collection('Pedidos').onSnapshot((snapShots)=>{
        this.setState({
            Cliente: snapShots.docs.map((doc)=>{
                return console.log(doc.data());
            })
        })
    })
}

render(){
    return(
<div>


</div>
    );
} 
}
export default Pedidos;