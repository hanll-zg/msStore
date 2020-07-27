import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import {router} from './router/index'
import Vant from 'vant';
import 'vant/lib/index.css';
import DdShare from 'dd-share'
Vue.use(DdShare)

Vue.use(Vant);
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  router  ,
  render: h => h(App),
}).$mount('#app')


import axios from 'axios'
axios.defaults.baseURL = 'http://47.96.93.202:9999/'
Vue.prototype.axios = axios
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})
