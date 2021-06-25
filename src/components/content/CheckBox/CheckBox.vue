<template>
  <div class="checkBox" :class="{check: isChecked}" @click="checkClick">
          <img src="@/assets/img/cart/tick.svg" alt="" >
          </div>
</template>

<script>
export default {
    props: {
        isChecked: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        checkClick() {
            this.isChecked = !this.isChecked
        }
    }
}
</script>

<style scoped>
    img {
        width: 100%;
    }
    .check {
        background-color: red;
        border-color: red;
    }
</style>