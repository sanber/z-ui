<template>
    <!-- <div class="z-button">按钮组件</div> -->
    <button class="z-button" :class="[`z-button-${type}`,
    {'is-plain': plain},
    {'is-round': round},
    {'is-circle': circle},
    {'is-disabled': disabled}]"
    :disabled="disabled"
    @click="handleClick()"
    >
      <i v-if="icon" :class="icon"></i>
      <!-- 如果没有传入任何内容 也就是当我们没有传入插槽的时候 -->
      <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>
<script>
export default {
  name: 'ZButton',
  props: {
    type: {
      // 数据类型
      type: String,
      // 默认数据
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  },
  created () {
    console.log(this.type)
    console.log(this.$slots)
  }
}
</script>
<style lang="scss" scoped>
  .z-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    // margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus{
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
  .z-button-primary{
    color:#fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus{
      background: #66b1ff;
      background-color: #66b1ff;
      color: #fff;
    }
  }
  .z-button-success{
    color:#fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus{
      background: #85ce61;
      background-color: #85ce61;
      color: #fff;
    }
  }
  .z-button-info{
    color:#fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus{
      background: #a6a9ad;
      background-color: #a6a9ad;
      color: #fff;
    }
  }
  .z-button-warning{
    color:#fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus{
      background: #ebb563;
      background-color: #ebb563;
      color: #fff;
    }
  }
  .z-button-danger{
    color:#fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus{
      background: #f78989;
      background-color: #f78989;
      color: #fff;
    }
  }
  // 朴素按钮样式
  .z-button.is-plain{
    &:hover,
    &:focus{
      background: #fff;
      border-color: #489eff;
      color: #409eff;
    }
  }
  .z-button-primary.is-plain{
    color: #409eff;
    background: #ecf5ff;
    &:hover,
    &:focus{
      background: #409eff;
      border-color: #409eff;
      color: #fff;
    }
  }
  .z-button-success.is-plain{
    color: #67c23a;
    background: #c2e7b0;
    &:hover,
    &:focus{
      background: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
  }
  .z-button-info.is-plain{
    color: #909399;
    background: #d3d4d6;
    &:hover,
    &:focus{
      background: #909399;
      border-color: #909399;
      color: #fff;
    }
  }
  .z-button-warning.is-plain{
    color: #e6a23c;
    background: #f5dab1;
    &:hover,
    &:focus{
      background: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
  }
  .z-button-danger.is-plain{
    color: #f56c6c;
    background: #fbc4c4;
    &:hover,
    &:focus{
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
  }
  .z-button.is-round{
    border-radius: 20px;
    padding: 12px 20px;
  }
  .z-button.is-circle{
    border-radius: 50%;
    padding: 12px;
  }
  .z-button.is-disabled{
    cursor: no-drop;
    // 自己写的
    filter: grayscale(100%); // 数值可以控制灰度
    -moz-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
  }
  .z-button [class*=z-icon-]+span{
    margin-left: 5px;
  }
</style>
