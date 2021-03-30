<!-- radio组件 -->
<template>
  <div class='z-radio-group'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'z-radio-group',
  // 需要提供一个计算属性 model
  computed: {
    model: {
      get () {
        // console.log(this.value)
        return this.value
      },
      set (value) {
        // console.log('2' + value)
        // 触发父组件给当前组件注册的input事件
        this.$emit('input', value)
      }
    }
  },
  // created () {
  //   console.log(this.$parent)
  // },
  provide () {
    return {
      radioGroup: this
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    // z-radio-group接受到了一个value值
    // 将来还需要触发当前组件的input事件
    value: null
  }
}
</script>
<style lang='scss' scoped>

</style>
