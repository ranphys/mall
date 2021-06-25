<template>
  <div class="tab-control">
      <div class="tab-control-item" v-for="(item,index) in titles" @click="tabClick(index)">
          <span :class="{active: currentIndex===index}">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        titles:{
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
        tabClick(index) {
            this.currentIndex=index
            this.$emit('tabClick',index)
        }
    }

}
</script>

<style>
.tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
}
.tab-control-item {
    flex: 1;
}
.active {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
}
.tab-control-item span {
    padding: 5px;
}


</style>