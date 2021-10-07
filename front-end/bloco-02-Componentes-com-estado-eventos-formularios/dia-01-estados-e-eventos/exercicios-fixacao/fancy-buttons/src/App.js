import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
      backgroundColor1: 'white',
      backgroundColor2: 'white',
      backgroundColor3: 'white',
    }
  }
  handleClick1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,
      backgroundColor1: ((estadoAnterior.numeroDeCliques1 + 1) % 2 === 0 ? 'green' : 'white'),
    }))
    console.log('Clicou1')
  }
  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,
      backgroundColor2: ((estadoAnterior.numeroDeCliques2 + 1) % 2 === 0 ? 'red' : 'white'),
    }))
    console.log('Clicou2')
  }
  handleClick3() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1,
      backgroundColor3: ((estadoAnterior.numeroDeCliques3 + 1) % 2 === 0 ? 'purple' : 'white'),
    }))
    console.log('Clicou3')
  }

  render() {
    return (
      <div>
        <button style={{backgroundColor:this.state.backgroundColor1}} onClick={this.handleClick1}>{this.state.numeroDeCliques1}</button>
        <button style={{backgroundColor:this.state.backgroundColor2}} onClick={this.handleClick2}>{this.state.numeroDeCliques2}</button>
        <button style={{backgroundColor:this.state.backgroundColor3}} onClick={this.handleClick3}>{this.state.numeroDeCliques3}</button>
      </div>
    )
  }
}

export default App;