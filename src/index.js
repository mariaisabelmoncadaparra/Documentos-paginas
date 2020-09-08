import React from 'react';
import ReactDOM from 'react-dom';
import Facebook from './pages/facebook';
import Inicio from './pages/inicio';



import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>
    <Facebook />
  </React.StrictMode>,
  document.getElementById('root')
);
