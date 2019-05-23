<template>
  <el-row>
    <el-col :offset="3" :span="6">
      <nuxt-link to="/">
        home
      </nuxt-link>
      <nuxt-link to="/cart">
        <!-- {{ $store.state.isLogin }} {{ $store.state.username }} -->
      </nuxt-link>
    </el-col>

    <el-col :offset="12" :span="6">
      <nuxt-link to="/seller/login">
        seller login
      </nuxt-link>
      <nuxt-link to="/user/login">
        user login
      </nuxt-link>
    </el-col>
  </el-row>
</template>

<script>
import request from '@/service'
export default {
  data() {
    return {

    }
  },

  mounted() {
    this.checkStatus()
    console.log(this.$store)
  },
  methods: {
    async checkStatus() {
      // 开始服务端渲染没拿到cookie
      const res = await request.get('/api/user/auth')
      this.$store.commit('setLogin', res.code)
      this.$store.commit('setUsername', res.code === 0 ? '' : res.data.username)
    }
  }

}
</script>

<style lang="scss">
  @import "@/assets/css/public/layout.scss";
.m-header{
  background: lightseagreen
}
</style>
