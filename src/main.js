// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

import 'tachyons/css/tachyons.min.css'
import 'material-design-icons/iconfont/material-icons.css'
// import feather from 'feather-icons'


var Web3 = require('web3'); //看不懂
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); //看不懂
var Tx = require('ethereumjs-tx');


// var web3 = new Web3( Web3.givenProvider );



Vue.prototype.$web3 = web3

window.web3 = web3
window.Tx = Tx
window.Buffer  = Buffer;
// window.feather = feather;



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})