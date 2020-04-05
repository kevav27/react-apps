import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

/*class Contador extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0
    };
  }

  aumentar = () =>{this.setState({contador:this.state.contador+1})};
  disminuir = () =>{this.setState({contador:this.state.contador-1})};

  render() {
    return (
      <div>
      <p> {this.state.contador} </p>
      <button onClick={this.aumentar}> + </button>
      <button onClick={this.disminuir}> - </button>
      </div>
    );
  }
}*/

class Formulario extends Component{
  constructor(){
    super();
    this.state={
      nombre: '',
      correo:'',
      password:'',
      direccion:'',
      prioridad:''
    }
  }
/*syncNombre(nombre){
  console.log(nombre.value);
}

syncCorreo(correo){
  console.log(correo.value);
}

syncPassword(password){
  console.log(password.value);
}*/

syncCambios(control){
  const {name, value} = control;
  const state = {};
  state[name] = value;
  this.setState(state)
}

enviarForm =(e)=>{
  e.preventDefault();
  console.log(this.state)
}

limpiarForm = () => {
  document.getElementById("form-lab").reset();
  }

  render(){
    return(
    <div>
     <form id="form-lab" action="">
        <div><input id="nombre" name="nombre" type="text" placeholder="Nombre" onChange={(ev) =>{this.syncCambios(ev.target)}}/></div>
        <div><input id="correo" name="correo" type="text" placeholder="Correo" onChange={(ev) =>{this.syncCambios(ev.target)}}/></div>
        <div><input id="password" name="password" type="Password" placeholder="Password" onChange={(ev) =>{this.syncCambios(ev.target)}}/></div>
        <div>
        <label> Escoja una prioridad <br></br>
        <select id="prioridad" name="prioridad" onChange={(ev) => {this.syncCambios(ev.target)}}>
          <option value="Alta"> Alta </option>
          <option value="Baja"> Baja </option>
          <option value="Media"> Media </option>
        </select>
        </label>
        </div>
        <div>
        <textarea id="direccion" name="direccion" type="text" placeholder="Dirección de domicilio" onChange={(ev) =>{this.syncCambios(ev.target)}}/>
        </div>
        <button type="submit" onClick={this.enviarForm}> Enviar </button>
        <button type="reset" onClick={this.limpiarForm}> Limpiar </button>
    </form>
    </div>)
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Kevin Artavia'
    };
  }

  render() {
    return (
      <div>
      <h1> Formulario Lab 10</h1>
        <Formulario/>
        <Hello name={this.state.name} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
