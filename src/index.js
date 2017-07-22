import React from 'react';
import { render } from 'react-snapshot';

import 'moment/locale/ru';
import 'moment/locale/zh-cn';
import 'normalize.css/normalize.css';
import './index.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
