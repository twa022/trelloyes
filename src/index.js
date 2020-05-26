import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as AppStore from './store';

ReactDOM.render(<App store={AppStore.STORE}/>, document.getElementById('root'));
