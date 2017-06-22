import React from 'react';
import { render } from 'react-snapshot';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render(<Home />, document.getElementById('root'));
registerServiceWorker();
