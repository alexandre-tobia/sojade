import 'awesome-bootstrap-checkbox'
import './scss/main.scss'
import $ from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import fs from 'fs';
const fb = require('./assets/fireConfig');


import Vue from 'vue'
import App from './components/App'

let app
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app =
      new Vue({
        el: '#app',
        render: h => h(App)
      })
  }
})