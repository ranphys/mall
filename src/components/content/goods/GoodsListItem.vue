<template>
    <div class="goods-item" @click="itemClick">
<<<<<<< HEAD
        <img v-lazy="goodsItem.img" alt="" @load="imageLoad">
=======
        <img :src="goodsItem.img" alt="" @load="imageLoad">
>>>>>>> 1a0f987a73b6dc873102efe1e11d754e45854257
        <div class="goods-info">
            <p class="title">{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span><span class="collect">{{goodsItem.cfav}}</span>
        </div>
    </div>
  
</template>

<script>
export default {
    props:{
        goodsItem: {
            type:Object,
            default() {
                return{}
            }
        }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('imageLoad')
      },
      itemClick() {
        this.$router.push('/detail/'+this.goodsItem.id)
      }

    }

}
</script>

<style>
.goods-item {
    padding-bottom: 40px;
    position: relative;

    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
    border:3px solid var(--color-tint);
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~@/assets/img/common/collect.svg") 0/14px ;
  }


</style>