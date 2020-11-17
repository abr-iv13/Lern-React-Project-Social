import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter } from 'react-router-dom';

import state from  './redux/state';

import './styles/grid.css';
import './styles/reboot.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

