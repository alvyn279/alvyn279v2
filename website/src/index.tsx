import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './utils/serviceWorker';

// CSS
import './App.min.css';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'lightbox2/dist/css/lightbox.min.css';
import 'antd/dist/antd.css';

// JS
import 'jquery';
import 'bootstrap';
import './libs/easing.min';

export const MAIN_THEME_COLOR = '#0078ff';
export const FONT_COLOR_DEFAULT = '#000000';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
