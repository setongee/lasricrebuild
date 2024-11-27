import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import {store, persistor} from './redux/store'
import Construction from './building/construction';

ReactDOM.render(
  
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  ,
  document.getElementById('root')

);
