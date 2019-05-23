import Vue from 'vue'
import VueRouter from "vue-router";

Vue.prototype.$go = (path) => {
  console.log('go is trigger',this)
  VueRouter.push(path)
}