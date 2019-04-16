import 'awesome-bootstrap-checkbox'
import './scss/main.scss'
import $ from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import fs from 'fs';


import Vue from 'vue'
import App from './components/App'


// import fb from './assets/data/fireConfig'

new Vue({
  el: '#app',
  render: h => h(App)
})

// new Vue({
//   el: '#questions',
//   render: h => h(Quiz)
// })

// // new Vue({
// //   el: '#products',
// //   render: h => h(Products)
// // })

// // new Vue({
// //   el: '#game',
// //   render: h => h(Game)
// // })
