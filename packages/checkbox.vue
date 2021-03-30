<!-- radio组件 -->
<template>
  <label class='z-checkbox' :class="{'is-checked' : isChecked}">
    <span class="z-checkbox-input">
      <span class="z-checkbox-inner"></span>
      <input
        type="checkbox"
        :value="label"
        :name="name"
        class="z-checkbox-original"
        v-model="model"
      >
    </span>
    <span class="z-checkbox-label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'z-checkbox',
  // 需要提供一个计算属性 model
  computed: {
    model: {
      get () {
        // this.checkboxGroup.value
        return this.isGroup ? this.checkboxGroup.value : this.value
        // return this.value
      },
      set (value) {
        this.isGroup ? this.checkboxGroup.$emit('input', value) : this.$emit('input', value)
        // this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.checkboxGroup
    },
    isChecked () {
      // 如果是group包裹，判断label是否在model中
      // 如果没有group包裹，直接使用model
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  },
  inject: {
    checkboxGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang='scss' scoped>
  .z-checkbox{
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    margin-right: 30px;
    .z-checkbox-input{
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .z-checkbox-inner{
        display: inline-block;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 2px;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: #fff;
        z-index: 1;
        transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s,cubic-bezier(.71,-.46,.29,1.46);
        &:after{
          box-sizing: content-box;
          content: '';
          border: 1px solid #ffffff;
          border-left: 0;
          border-top: 0;
          height: 7px;
          left: 4px;
          position: absolute;
          top: 1px;
          transform: rotate(45deg) scaleY(0);
          width: 3px;
          transition: transform .15s ease-in .05s;
          transform-origin: center;
        }
      }
      .z-checkbox-original{
        opacity: 0;
        outline: none;
        position: absolute;
        left: 10px;
        margin: 0;
        width: 0;
        height: 0;
        z-index: -1;
      }
    }
    .z-checkbox-label{
      display: inline-block;
      padding-left: 10px;
      line-height: 19px;
      font-size: 14px;
    }
  }
  // 选中的样式
  .z-checkbox.is-checked{
    .z-checkbox-input{
      .z-checkbox-inner{
        background-color: #409eff;
        border-color: #409eff;
        &:after{
          // content: '\e6ee';
          // font-size: 20px;
          // color: yellow;
          transform: rotate(45deg) scaleY(1);
        }
      }
      // &:after{
      //   transform: rotate(45deg) scaleY(1);
      // }
    }
    .z-checkbox-label{
      color: #409eff;
    }
  }
</style>
