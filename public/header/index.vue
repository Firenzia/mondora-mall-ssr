<template>
  <el-row>
    <el-col :offset="3" :span="6">
      <nuxt-link to="/">
        mondora  {{$store.state}} 
      </nuxt-link>

      <div class="account" @click="login(1)">
        {{ accountType===1? `你好!${username}`:`买家登陆` }}
        <div v-show="accountType===1" class="popover">
          <button @click="logout(1)">
            退出
          </button>
        </div>
      </div>
      <div class="account" @click="login(2)">
        {{ accountType===2?`你好!${username}`:`卖家登陆` }}
        <div v-show="accountType===2" class="popover">
          <button @click="goToSellerCenter">
            进入卖家中心
          </button>
          <button @click="logout(2)">
            退出
          </button>
        </div>
      </div>
    </el-col>

    <el-col :offset="18" :span="6">
      <nuxt-link to="/cart">
        购物车
      </nuxt-link>
    </el-col>
  </el-row>
</template>

<script>
import request from '@/service'
import { mapState } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['isLogin', 'username', 'accountType'])
  },
  mounted() {
    // this.checkStatus()
    console.log('store', this.$store)
  },
  methods: {
    async checkStatus() {
      // 开始服务端渲染没拿到cookie
      const p1 = request.get('/api/user/auth')
      const p2 = request.get('/api/seller/auth')
      const results = await Promise.all([p1, p2])

      const meta = {
        isLogin: 0,
        username: '',
        accountType: 0
      }
      for (const result of results) {
        if (result.code === 1) {
          meta.isLogin = 1
          meta.username = decodeURIComponent(result.data.username)
          meta.accountType = result.data.accountType
          break
        }
      }
      console.log('meta', meta, 'setlogin')
      this.$store.commit('setLogin', meta)
    },
    login(type) {
      if (this.accountType !== 0 && type !== this.accountType) { // 已登录a类型 尝试登陆b类型
        const map = {
          1: '买家',
          2: '卖家'
        }
        this.$message({
          message: `请先退出${map[this.accountType]}账号`,
          type: 'warning'
        })
        return
      }
      if (type === this.accountType) { // 无效点击
        return
      }
      const url = type === 1 ? '/user/login' : '/seller/login'
      this.$router.push(url)
    },
    async logout(type) {
      const url = type === 1 ? '/api/user/logout' : '/api/seller/logout'
      const res = await request.post(url, {})
      if (res.code === 1) {
        this.$message({
          message: `登出成功`,
          type: 'success'
        })
        this.$router.push('/')
        this.checkStatus()
      }
    },
    goToSellerCenter() {
      console.log('mgr', this)
      this.$router.push('/seller/management/shop/info')
      // this.$go.call(this,'/seller/management/shop/info')
    }

  }

}
</script>

<style lang="scss">
.m-header{
  background: lightseagreen
}
.account{
  display: inline-block;
  margin-right:50px;
  position:relative;
  &:hover{
    .popover{
      display: block;
    }
  }
  .popover{
    position: absolute;
    background:#fff;
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: center;
    display: none;
  }
}

</style>
