import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import './index.css';
import App from './App';



ReactDOM.render(
  <BrowserRouter basename='https://siegetank-90.github.io/FEM-SpaceTourisum/'>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

