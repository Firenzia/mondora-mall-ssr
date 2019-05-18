<template>
  <el-container>
    <el-header style="background:orange !important">
      <my-header />
    </el-header>
    <el-main>
      <div class="content-wrapper">
        <nuxt />
      </div>
    </el-main>
    <el-footer style="background:orange !important">
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
  max-width: 1280px;
  margin:0 auto;
}
</style>
