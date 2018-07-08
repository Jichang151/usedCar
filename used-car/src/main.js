// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Navbar from '@/components/Navbar'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import qs from 'qs'
Vue.config.productionTip = false

Vue.use(ElementUi)
axios.defaults.withCredentials = true
Vue.prototype.axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: {
    App,
    Navbar,
    ElementUi
  },
  template: '<App/>'
})



function version(str1,str2) {
  let arr3 = str1.split(".");
  let arr4 = str2.split(".");
  let arr5 = arr3[2].split("");
  let arr6 = arr4[2].split("");
  if (arr3[0] === arr4[0]) {
    if (arr3[1] === arr4[1]) {
      if (arr3[2] === arr4[2]) {
        if (arr5[0] === arr6[0]) {
          if (arr5[1] === arr6[1]) {
            console.log('版本号相等');
          } else if (arr5[1] > arr6[1]) {
            console.log('str1版本大');
          } else {
            console.log('str2版本大');
          }
        } else if (arr5[0] > arr6[0]) {
          console.log('str1版本大');
        } else {
          console.log('str2版本大');
        }
      } else if (arr3[2] > arr4[2]) {
        console.log('str1版本大');
      } else {
        console.log('str2版本号大');
      }
    } else if (arr3[1] > arr4[1]) {
      console.log('str1版本号大');
    } else {
      console.log('str2版本号大');
    }
  } else if (arr3[0] > arr4[0]) {
    console.log('str1版本大');
  } else {
    console.log('str2版本大');
  }
}
version('1.2.3a','1.2.4b');
