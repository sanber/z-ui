<!-- dialog组件 -->
<template>
  <transition name="dialog-animation">
    <!-- .self是用来阻止事件的冒泡 只有点击本元素有用 点击子元素没用 -->
    <div class="z-dialog_wrapper" v-show="visible" @click.self="handleClose">
      <div class="z-dialog" :style="{width, marginTop}">
        <div class="z-dialog_header">
          <span class="z-dialog_title">{{tittle}}</span>
          <button class="z-dialog_headerbtn" @click="handleClose">
            <i class="z-icon-close"></i>
          </button>
        </div>
        <div class="z-dialog_body">
          <!-- <span>这是一段信息</span> -->
          <slot></slot>
        </div>
        <div class="z-dialog_footer" v-if="$slots.footer">
          <!-- <z-button>取消</z-button>
          <z-button type="primary">确定</z-button> -->
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'z-dialog',
  props: {
    tittle: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    marginTop: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleClose () {
      // this.visible = false
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style lang='scss' scoped>
  .z-dialog_wrapper{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0,0,0,0.5);
    .z-dialog{
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.3);
        box-sizing: border-box;
        width: 30%;
        &_header{
        padding: 20px 20px 10px;
        .z-dialog_title{
            line-height: 24px;
            font-size: 18px;
            color: #303133;
        }
        .z-dialog_headerbtn{
            position: absolute;
            top: 20px;
            right: 20px;
            padding: 0;
            background: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 16px;
            .z-icon-close{
            color:909399
            }
        }
        }
        &_body{
          padding: 30px 20px;
          color: #606266;
          font-size: 14px;
          word-break: break-all;
        }
        &_footer{
          padding: 10px 20px 20px;
          text-align: right;
          box-sizing: border-box;
          // 深度选择器 scss》 ::v-deep less》 /deep/  css》 >>>
          ::v-deep .z-button:first-child{
              margin-right: 20px;
          }
        }
    }
  }
  .dialog-animation-enter-active {
    animation: fade .5s;
  }
  .dialog-animation-leave-active {
    animation: fade .5s reverse;
  }
  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>
