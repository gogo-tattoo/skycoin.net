import React from 'react';
import { render } from 'react-snapshot';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css/normalize.css';
import './index.css';

render(<App />, document.getElementById('root'));
registerServiceWorker();
