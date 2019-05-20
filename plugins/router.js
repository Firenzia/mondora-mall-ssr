export default ({ app }) => {
  app.router.afterEach((to, from) => {
    //  todo  增加埋点
    console.log('to path', to.path)
  })
}
