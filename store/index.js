const cookieparser = process.server ? require('cookieparser') : undefined
console.log('cookieparser',cookieparser)
export const state = () => ({
  isLogin: 0,
  username: '',
  accountType: 0   // 1 买家 2 卖家
})

export const mutations = {
  setLogin(state, {isLogin, username, accountType}) {
    console.log('setLogin',arguments)
    state.isLogin = isLogin
    state.username = username
    state.accountType = accountType
  }
}
export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    console.log('nuxt server init ====================================')    
    if (req.headers.cookie) {
      const parsed = JSON.parse(req.headers.cookie.split(";")[0].split("=")[1]).passport.user
      try {
        commit('setLogin', {isLogin:1, username: parsed.username, accountType: parsed.account_type})
      } catch (err) {
        // 找不到有效的Cookie
      }
    }
  }
}