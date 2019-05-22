<template>
  <div>
    user login
    <!-- 登录组件后面作为公共组件 -->
    <div class="login-wrapper">
      <el-form ref="form" :model="form" label-width="80px">
        <p style="text-align:center;margin-bottom:16px">
          用户登录
        </p>
        <el-form-item label="用户名">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item>
          <!-- todo 输入验证码 -->
          <el-button type="primary" @click="login">
            登录
          </el-button>
          <el-button type="primary" @click="logout">
            登出
          </el-button>
          <el-button type="primary" @click="query">
            查询
          </el-button>
           <el-button type="primary" @click="auth">
            是否已登陆
          </el-button>
        </el-form-item>
      </el-form>
    </div>

    <nuxt-link to="/">
      login
    </nuxt-link>
  </div>
</template>
<script>
import request from '@/service'
import CryptoJS from 'crypto-js'
export default {
  layout: 'login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login() {
      const res = await request.post('/api/user/login', {
        username: window.encodeURIComponent(this.form.username),
        password: CryptoJS.MD5(this.form.password).toString()
      })
      console.log(res)
    },
    async logout() {
      const res = await request.post('/api/user/logout', {})
      console.log(res)
    },
    async query() {
      const res = await request.get('/api/user/info', {})
      console.log(res)
    },
    async auth() {
      const res = await request.get('/api/user/auth')
      console.log(res)
    }
  }

}
</script>
<style lang="scss" scoped>
.login-wrapper{
  width:400px;
  height:auto;
  margin-left:auto;
  position:absolute;
  top:40%;
  transform: translateY(-50%);
  right:60px;
  padding:40px 20px 10px;
  background:#fff;
}
</style>
