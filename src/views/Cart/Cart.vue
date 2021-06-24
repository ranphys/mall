<template>
  <div>
    <nav-bar class="navbar">
    <div slot="center">
      购物车({{cartLength}})
    </div>
  </nav-bar>
  <cart-list></cart-list>
  <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import{ mapGetters } from 'vuex'
import NavBar from '@/components/common/NavBar/NavBar.vue'
import CartList from './childcomps/cartList.vue'
import BottomBar from './childcomps/BottomBar.vue'
export default {
  components: {
    NavBar,
    CartList,
    BottomBar
  },
  computed: {
    ...mapGetters(['cartLength'])
  }
}
</script>

<style>
.navbar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>