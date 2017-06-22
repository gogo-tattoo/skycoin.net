import React from 'react';
import { render } from 'react-snapshot';
import Router from './components/Router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render(<Router />, document.getElementById('root'));
registerServiceWorker();
