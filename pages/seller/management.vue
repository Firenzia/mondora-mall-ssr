<template>
  <div class="managent-wrapper">
    <div class="pane-left">
      <p>卖家工作台</p>

      <h4>店铺管理</h4>
      <nuxt-link to="/seller/management/shop/info">
        店铺信息
      </nuxt-link>
      <br>

      <h4>交易管理</h4>
      <nuxt-link to="/seller/management/transaction/deal">
        已卖出的宝贝
      </nuxt-link>
      <br>
      <nuxt-link to="/seller/management/transaction/comment">
        客户评价
      </nuxt-link>

      <h4>物流管理</h4>
      <nuxt-link to="/seller/management/delivery/service">
        物流服务
      </nuxt-link>
      <br>
      <nuxt-link to="/seller/management/delivery/shippment">
        发货
      </nuxt-link>

      <h4>宝贝</h4>
      <nuxt-link to="/seller/management/product/publish">
        发布宝贝
      </nuxt-link>
      <br>
      <nuxt-link to="/seller/management/product/check">
        查看宝贝
      </nuxt-link>
    </div>
    <div class="pane-right">
      <nuxt-child />
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.managent-wrapper{
  min-height:600px;
  display: flex;
  .pane-left{
    width:200px;
    border:1px solid lightseagreen;
    flex-shrink: 0;
  }
  .pane-right{
    flex-grow:1;
    border:1px solid lightseagreen;
    padding:30px 40px;
  }
}
</style>
