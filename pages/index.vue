<template>
  <section class="container">
    <div>
      <h1 class="title">
        nuxt-demo, ip isddd {{ ip }}
      </h1>
      <div v-for="(item, index) in list" :key="index">
        {{ item }}
      </div>
      <button @click="getData">
        test
      </button>
    </div>
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  // components: {
  //   Logo
  // },
  data() {
    return {
      list: [],
      ip: 0
    }
  },
  async asyncData({ $axios }) {
    const res = await $axios.get('/student/list')
    console.log(res)
    return {
      list: res.data.result
    }
  },
  methods: {
    async getData() {
      const res = await this.$axios.get('/api/student/list')
      console.log(res)
    }
  }
}
</script>

<style>

</style>
