<template>
  <div class="bottom-bar">
      <div class="bar-left">
          <span>客服</span><span>店铺</span><span>收藏</span>
      </div>
      <div class="bar-right">
          <span class="cart" @click="addToCart">加入购物车</span>
          <span class="buy">购买</span>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        addToCart() {
            this.$emit('addToCart')
        }
    }

}
</script>

<style scoped>
    .bottom-bar {
        position: fixed;
        height: 49px;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        background-color: #fff;
    }
    .bar-left {
        float: left;
        display: flex;
        width: 50%;
    }
    .bar-left span {
        flex: 1;
        height: 49px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
    }
    .bar-right {
        float: right;
        display: flex;
        width: 50%;
    }
    .bar-right span {
        flex: 1;
         height: 49px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
    }
    .buy {
        background-color:pink;
    }
    .cart {
        background-color: yellow;
        
    }
    
</style>