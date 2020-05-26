import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as STORE from './store';

ReactDOM.render(<App store={STORE}/>, document.getElementById('root'));
