<template>
  <div class="base-info" v-if="Object.keys(goods).length !==0">
      <div class="info-title">
          {{goods.title}}
      </div>
      <div class="info-price">
          <span class="l-price">{{goods.lowPrice}}</span><span class="h-price">{{goods.highPrice}}</span>
      </div>
      <div class="info-columns">
          <span>{{goods.columns[0].desc}}</span><span>{{goods.columns[0].cfav}}</span><span>{{goods.columns[0].name}}</span>
      </div>
      <div class="info-services">
          <span v-for="index in goods.services.length">
              <img :src="goods.services[index-1].icon" alt="" class="icon">
              <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        goods: {
            type: Object,
            default() {
                return {}
            }
        }
    }

}
</script>

<style scoped>
.info-title {
    margin: 10px 0;
    font-weight: 700;
}
.l-price {
    color: var(--color-high-text);
    font-size: 25px;
    font-weight: 700;
    
}
.h-price {
    text-decoration: line-through;
    font-size: 15px;
}
.info-columns {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 10px 0;
    
}
.info-services {
    display: flex;
    justify-content: space-between;
}
.info-services {
    padding: 20px 3px;
    border-top: 5px solid #eee;
    border-bottom: 10px solid #eee;
}
.icon {
    display: inline-block;
    vertical-align: bottom;
    height: 25px;
}

</style>>

