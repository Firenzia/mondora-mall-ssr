
import Vue from 'vue'
import Vuex from 'vuex'
import request from '@/service'
Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    isLogin: 0,
    username: ''
  },
  mutations: {
    setLogin(state, status) {
      console.log('status', status)
      state.isLogin = status
    },
    setUsername(state, name) {
      state.username = name
    }
  },
  actions: {
    async setLogin({ commit }) {
      const res = await request.get('/api/user/auth')
      console.log('res', res)
      commit('setLogin', res.code)
    }
  }
})

export default store
