<!-- form组件 -->
<template>
  <div class='z-form-item'>
    <label class="z-form-item-label" :style="labelStyle">{{label}}</label>
    <div class="z-form-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'z-form-item',
  inject: ['Form'],
  props: {
    label: {
      type: String,
      default: ''
      // validator: function (value) {
      //   return value === '性别' && value !== ''
      // }
    }
  },
  computed: {
    labelStyle () {
      return {
        width: this.Form.labelWidth,
        textAlign: this.Form.labelPosition
      }
    }
  }
}
</script>
<style lang='scss' scoped>
  .z-form-item{
    margin-bottom: 25px;
    .z-form-item-label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .z-form-item-content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidde;
    }
  }
</style>
