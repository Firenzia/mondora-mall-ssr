<template>
  <el-container>
    <el-header />
    <el-main style="background:green;height:800px">
      <div class="content-wrapper">
        <nuxt />
      </div>
    </el-main>
    <el-footer />
  </el-container>
</template>
<script>

export default {
  components: {

  }
}
</script>

<style>
.content-wrapper{
  max-width: 1200px;
  margin:0 auto;
}
</style>
