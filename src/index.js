import React from 'react';
import {render} from 'react-dom';
import AppService from './modules/app.service';
import App from './App';
import {config} from './modules/config';
import './modules/ts.modules.ts';
import './css/style.css';
import './less/index.less';
import './scss/index.scss';

console.log('Config key:', config.key);

const service = new AppService('Привет, мир!');
service.log();

render(<App />, document.getElementById('app'));