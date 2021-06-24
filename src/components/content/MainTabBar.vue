<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="@/assets/img/home.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="@/assets/img/category.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <img slot="item-icon" src="@/assets/img/shoppingcar.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/shoppingcar_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="@/assets/img/mine.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/mine_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar';
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  components: {
    TabBar,
    TabBarItem

  }
  
}
</script>

<style>

</style>