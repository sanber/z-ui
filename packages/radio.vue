<!-- radio组件 -->
<template>
  <label class='z-radio' :class="{'is-checked' : label==model}">
    <span class="z-radio-input">
      <span class="z-radio-inner"></span>
      <input
        type="radio"
        :value="label"
        :name="name"
        class="z-radio-original"
        v-model="model"
      >
    </span>
    <span class="z-radio-label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'z-radio',
  // 需要提供一个计算属性 model
  computed: {
    model: {
      get () {
        // this.radioGroup.value
        return this.isGroup ? this.radioGroup.value : this.value
      },
      set (value) {
        // console.log('2' + value)
        // 触发父组件给当前组件注册的input事件
        // provide 与 inject provider/consumer
        this.isGroup ? this.radioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.radioGroup
    }
  },
  inject: {
    radioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang='scss' scoped>
  .z-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    .z-radio-input{
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .z-radio-inner{
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after{
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) scale(0);
          transition: transform .15s ease-in;
        }
      }
      .z-radio-original{
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    .z-radio-label{
      font-size: 14px;
      padding-left: 10px;;
    }
  }
  // 选中的样式
  .z-radio.is-checked{
    .z-radio-input{
      .z-radio-inner{
        border-color: #409eff;
        background-color: #409eff;
        &:after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
    .z-radio-label{
      color:#409eff;
    }
  }
</style>
