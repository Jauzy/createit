import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import * as serviceWorker from './serviceWorker';

import './Modules/index.css'
import './Modules/font.css'
import './Modules/override.css'
import './Modules/timeline.css'
import './Modules/rounded-img.css'
import './Modules/cardhover.css'
import './Modules/svg.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import JavascriptTimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

JavascriptTimeAgo.addLocale(en)
JavascriptTimeAgo.addLocale(ru)

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
