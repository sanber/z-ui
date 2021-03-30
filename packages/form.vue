<!-- from组件 -->
<template>
  <div class='z-form'>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'z-form',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    labelPosition: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
