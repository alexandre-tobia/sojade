import './scss/main.scss'
import $ from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";
import fs from 'fs';
import Vue from 'vue'
import Quiz from './components/Quiz'

new Vue({
  el: '#quiz',
  render: h => h(Quiz)
})