<!-- 输入框组件 -->
<template>
  <div class='z-input' :class="{'z-input-suffix' : showSuffix}">
    <!-- 如果传了show-password，判断是否需要切换密码的显示，如果不传则不判断 -->
    <input
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      class="z-input-inner"
      :placeholder="placeholder"
      :name = name
      :disabled="disabled"
      :class="{'is-disabled': disabled}"
      :value="value"
      @input="handleInput"
    >
    <span class="z-input-suffix" v-if="showSuffix">
      <i class="z-icon-error" v-if="clearable && value" @click="clear"></i>
      <i :class="passwordIcon" v-if="showPassword && type=='password'" @click="handlePassword"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'z-input',
  props: {
    placeholder: {
      type: String,
      default: '请输入'
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    },
    passwordIcon () {
      return this.passwordVisible ? 'z-icon-eye-close' : 'z-icon-browse'
    }
  },
  data () {
    return {
      // 用于控制是否显示密码框
      passwordVisible: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    },
    clear () {
      this.$emit('input', '')
    }
  }
}
</script>
<style lang='scss' scoped>
  .z-input{
    // width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;
    .z-input-inner{
      -webkit-appearance: none;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,045,.355,1);
      width: 100%;
      &:focus{
        outline: none;
        border-color: #409eff;
      }
      // input禁用样式
      &.is-disabled{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor:not-allowed;
      }
    }
  }
  .z-input-suffix{
    .z-input-inner{
      padding-right: 30px;
    }
    .z-input-suffix{
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 20px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
    }
  }
</style>
