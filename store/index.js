
import Vue from 'vue'
import Vuex from 'vuex'
import request from '@/service'
Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    isLogin: 0,
    username: '',
    accountType: 0   // 1 买家 2 卖家
  },
  mutations: {
    setLogin(state, {isLogin, username, accountType}) {
      console.log('setLogin')
      state.isLogin = isLogin
      state.username = username
      state.accountType = accountType
    },
    setUsername(state, name) {
      state.username = name
    }
  },
  actions: {
    // async setLogin({ commit }) {
    //   const res = await request.get('/api/user/auth')
    //   console.log('res', res)
    //   commit('setLogin', res.code)
    // }
  }
})

export default store
