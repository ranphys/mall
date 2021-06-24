<template>
  <div class="shop-info">
      <div class="shop">
          <img :src="shop.logo" alt="" class="shop-logo">
          <span>{{shop.name}}</span>
      </div>
    <div class="base-info">
      <div class="sells-goods">
          <div class="sells-info">
          <div class="sells-total">{{shop.sells}}</div>
          <div class="sells-text">总销量</div>
      </div>
      <div class="goods-info">
        <div class="goods-count">{{shop.goodsCount}}</div>
        <div class="goods-text">全部宝贝</div>
      </div>
      </div>
      <div class="evaluate">
          <table>
              <tr v-for="item in shop.score">
                  <td>{{item.name}}</td>
                  <td class="low" :class="{better:item.isBetter}">{{item.score}}</td>
                  <td class="low" :class="{better:item.isBetter}">{{item.isBetter? '高':'低'}}</td>
              </tr>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        shop: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style scoped>
.shop {
    margin: 40px 0;
}
    .shop-logo {
        vertical-align:middle;
        width: 80px;
        height: 80px;
    }
    .base-info {
        display: flex;
        text-align: center;
    }
    .sells-goods {
        flex: 1;
        display: flex;
        padding-right: 15px;
        align-items: center;
        font-size: 18px;
    }
    .sells-goods::after {
        content: '';
        border-right: 1px solid #ccc;
        height: 45px;
        margin-left: 15px;
    }
    .sells-info {
        flex: 1;
    }
    .goods-info {
        flex: 1;
    }
    .evaluate {
        flex: 1;
        margin-left: 25px;
    }
    .low {
        color: green;
    }
    .better {
        color: red;
    }
</style>