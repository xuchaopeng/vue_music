import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import 'common/less/index.less'

fastclick.attach(document.body);
Vue.use(VueLazyLoad,{
	loading:require('common/image/default.png')
});

new Vue({
  el: '#app',
  render:h => h(App),
  router
})