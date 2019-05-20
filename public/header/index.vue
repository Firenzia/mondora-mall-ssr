<template>
  <el-row>
    <el-col :offset="3" :span="6">
      <nuxt-link to="/">
        home
      </nuxt-link>
      <nuxt-link to="/cart">
        购物车
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
export default {

}
</script>

<style lang="scss">
  @import "@/assets/css/public/layout.scss";
.m-header{
  background: lightseagreen
}
</style>
