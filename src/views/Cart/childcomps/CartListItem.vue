<template>
  <div class="shop-info">
      <div class="checkBox" :class="{check: itemInfo.checked}" @click="checkClick">
          <img src="@/assets/img/cart/tick.svg" alt="" >
      </div>
      <div class="image"><img :src="itemInfo.img.img" alt=""></div>
      <div class="shop-text">
          <div class="title">
          {{itemInfo.title}}
            </div>
      <div class="shop-bottem">
          <div class="price">
              {{itemInfo.price}}
          </div>
          <div class="counter">
              X{{itemInfo.count}}
          </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        checkClick() {
            this.itemInfo.checked=!this.itemInfo.checked
        }
    },
    props:{
        itemInfo: {
            type: Object,
            default() {
                return {}
            }
        }
        
    }
}
</script>

<style scoped>
    .shop-info {
        width: 100%;
        display: flex;
        border-bottom: 2px solid #ccc;
        align-items: center;
    }
    .checkBox {
<<<<<<< HEAD
        width: 22px;
        height: 22px;
=======
        width: 10%;
>>>>>>> 1a0f987a73b6dc873102efe1e11d754e45854257
        margin: 7px;
    }
    .image {
        width: 20%;
<<<<<<< HEAD
        margin: 10px 0;
=======
        margin: 20px 0;
>>>>>>> 1a0f987a73b6dc873102efe1e11d754e45854257
    }
    .image img {
        width: 100%;  
    }
    .shop-text {
        width: 70%;
        margin: 20px 10px;
    }
    .title {
        width: 100%;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .shop-bottem {
        width: 100%;
        margin-top: 50px;
        
    }
    .price {
        float: left;
    }
    .counter {
        float: right;
    }
    .checkBox {
<<<<<<< HEAD
=======
        
>>>>>>> 1a0f987a73b6dc873102efe1e11d754e45854257
        border-radius: 50%;
        border:2px solid #aaa
    }
    .checkBox img {
        width: 100%;
    }
    .check {
        background-color: red;
        border-color: red;
    }
</style>