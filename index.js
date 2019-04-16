import './scss/main.scss'
import $ from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import fs from 'fs';
import Vue from 'vue'
// import Quiz from './components/Quiz'
import Products from './components/Products'
import Game from './components/Game'

// new Vue({
//   el: '#quiz',
//   render: h => h(Quiz)
// })

new Vue({
  el: '#products',
  render: h => h(Products)
})
// new Vue({
//   el: '#game',
//   render: h => h(Game)
// })