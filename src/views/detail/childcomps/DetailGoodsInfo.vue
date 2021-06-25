<template>
  <div >
      <img v-for="item in img" :src="item" alt="" class="image" @load="imageLoad">
  </div>
  
</template>

<script>
export default {
    props: {
        img: Object,
        default() {
            return {}
        }
    },
    methods: {
        imageLoad() {
            this.$emit('imageLoad')
        }
    }

}
</script>

<style scoped>
.image {
    width: 100%;
}

</style>