import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import 'bootstrap/dist/css/bootstrap.min.css';


axios.defaults.baseURL = 'http://127.0.0.1:3001'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

