<template>
  <div class="bottem-bar">
<<<<<<< HEAD
      <div  class="check-content">
          <div class="checkBox" :class="{check: isSelectAll}" @click="checkClick">
          <img src="@/assets/img/cart/tick.svg" alt="" >
          </div>
          <span>全选</span>  
      </div>
          
     <div class="total-price">
          合计： {{totalPrice}}
      </div>
      <div class="calc">
          去计算:  ({{calculate}})
=======
      <div class="checkBox" :class="{check: isSelectAll}" @click="checkClick">
          <img src="@/assets/img/cart/tick.svg" alt="" >
          </div>
      <div class="total-price">
          合计： {{totalPrice}}
      </div>
      <div class="calc">
          去计算{{calculate}}
>>>>>>> 1a0f987a73b6dc873102efe1e11d754e45854257
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    methods: {
        checkClick() {
            if(this.isSelectAll){
                this.cartList.forEach(item => item.checked = false)
            }else {
                this.cartList.forEach(item => item.checked = true)
            }
        }
    },
    computed: {
        ...mapGetters(['cartList']),
        totalPrice() {
            return "¥" + this.cartList.filter(item=> {
                return item.checked}).reduce((preValue,item)=>{
                return preValue + item.price * item.count
            },0).toFixed(2)
        },
        calculate() {
            return this.cartList.filter(item=> {
                return item.checked}).length
        },
        isSelectAll() {
            if(this.cartList.length==0){return false}
            return !this.cartList.find(item => item.checked==false)
        }
    }
}
</script>

<style scoped>
    .bottem-bar {
        position: relative;
        width: 100%;
        height: 40px;
        display: flex;
<<<<<<< HEAD
        background: #eee;
        align-items: center;
        font-size: 15px;
    }
    .check-content {
        flex: 1;
        display: flex;
        align-items: center;
    }
    .checkBox {
        width: 22px;
        height: 22px;
        margin: 0 7px;
        border-radius: 50%;
        border:2px solid #aaa;
=======
    }
    .checkBox {
        flex: 0.1;
        margin: 7px;
        border-radius: 50%;
        border:2px solid #aaa
>>>>>>> 1a0f987a73b6dc873102efe1e11d754e45854257
    }
    img {
        width: 100%;
    }
    .check {
        background-color: red;
        border-color: red;
    }
    .total-price {
        flex: 1;
    }
    .calc {
        flex: 1;
    }
</style>