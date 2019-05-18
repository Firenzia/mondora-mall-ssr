<template>
  <el-container>
    <el-header style="background:orange !important;margin-bottom:30px">
      <my-header />
    </el-header>
    <el-main>
      <div class="content-wrapper">
        <nuxt />
      </div>
    </el-main>
    <el-footer style="background:orange !important;margin-top:60px">
      I am footer
    </el-footer>
  </el-container>
</template>
<script>
import MyHeader from '@/public/header/index.vue'
export default {
  components: {
    MyHeader
  }
}
</script>

<style>
.content-wrapper{
  max-width: 1200px;
  margin:0 auto;
}
</style>
