/* eslint-disable prefer-const */
<!-- switch组件 -->
<template>
  <div class='z-switch' :class="[{'is-checked' : value}, {'is-disable' : disable}]" @click="handleSwitch">
    <span class="z-switch-core" ref="core">
      <span class="z-switch-button"></span>
    </span>
    <input type="checkbox" :name="name" class="z-switch-input" ref="inputCore" :disabled="switchDisable">
  </div>
</template>

<script>
export default {
  name: 'z-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // switchDisable: ''
    }
  },
  computed: {
    // switchDisable: () => {
    //   console.log(this.disable)
    //   // return this.disable ? 'disabled' : ''
    // }
    switchDisable () {
      return this.disable ? 'disabled' : ''
    }
  },
  methods: {
    // 第一种方式
    async handleSwitch () {
      if (this.disable === true) {
        return
      }
      this.$emit('input', !this.value)
      // 点击的时候，还需要修改背景色
      // 等待value发生了改变，再setColor
      // 数据修改后等待DOM更新,再去修改按钮的颜色
      await this.$nextTick()
      this.setColor()
      this.$refs.inputCore.checked = this.value
    },
    // 第二种方式
    // handleSwitch () {
    //   this.$emit('input', !this.value)
    //   // 点击的时候，还需要修改背景色
    //   // 等待value发生了改变，再setColor
    //   this.$nextTick().then(() => { this.setColor() })
    //   this.setColor()
    // },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.background = color
        // this.$refs.inputCore.checked = this.value
      }
    }
  },
  mounted () {
    this.setColor()
    this.$refs.inputCore.checked = this.value
  }
}
</script>
<style lang='scss' scoped>
  .z-switch{
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    .z-switch-core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .z-switch-button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
      }
    }
    // 隐藏input标签
    .z-switch-input{
      position:absolute;
      width: 0;
      height: 0;
      opacity: 0;
      margin: 0;
    }
  }
  .is-checked {
    .z-switch-core{
      border-color: #409eff;
      background-color: #409eff;
      .z-switch-button {
        transform: translateX(20px);
      }
    }
  }
  .is-disable {
    // pointer-events: none;
    opacity: .6;
    // cursor: not-allowed;
    .z-switch-core{
      cursor: not-allowed;
      // cursor: default;
    }
  }
</style>
