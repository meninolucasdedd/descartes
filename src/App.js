import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import Navegador from '../src/components/Navegador';

import './styles/Global.css'
function App() {
  return (
    <div className="App">
        <BrowserRouter>

          <Navegador />
          <Routes />
        </BrowserRouter>    
    </div>
  );
}

export default App;
