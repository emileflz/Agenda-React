import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Agenda from './componentes/ContenPadre'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        ITLA
        <p className="Titulo">Agenda React</p>
        <Agenda/>
        <div class="outer-footer">
        </div>
      </header>
    </div>
  );
}

export default App;
