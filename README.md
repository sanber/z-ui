基本介绍

- 做什么？


- 哪些改进？


- 涉及哪些方面？


效果演示

- 初始化vue项目

    vue create demo

- 安装组件库

    npm add z-ui

- 全局导入

    import Zui from 'z-ui'
    import 'z-ui/lib/zui.css'
    
    Vue.use(Zui)

- 使用组件

    <template>
      <div id="app">
        <z-button type="success" @click="visible=true">显示登录框</z-button>
        <z-dialog title="用户登录" :visible.sync="visible" width="30%">
          <z-form :model="model" label-width="80px">
            <z-form-item label="用户名">
              <z-input v-model="model.username" placeholder="请输入用户名" clearable></z-input>
            </z-form-item>
            <z-form-item label="用户密码">
              <z-input v-model="model.password" placeholder="请输入用户密码" show-password></z-input>
            </z-form-item>
            <z-form-item label="即时配送">
              <z-switch v-model="model.soon" active-color="green" inactive-color="red"></z-switch>
            </z-form-item>
            <z-form-item label="爱好">
              <z-checkbox-group v-model="model.hobby">
                <z-checkbox label="篮球"></z-checkbox>
                <z-checkbox label="足球"></z-checkbox>
                <z-checkbox label="乒乓球"></z-checkbox>
              </z-checkbox-group>
            </z-form-item>
            <z-form-item label="性别">
              <z-radio-group v-model="model.gender">
                <z-radio label="1">男</z-radio>
                <z-radio label="0">女</z-radio>
              </z-radio-group>
            </z-form-item>
          </z-form>
          <template v-slot:footer>
            <z-button type="primary" @click="login">登录</z-button>
            <z-button @click="visible=false">取消</z-button>
          </template>
        </z-dialog>
      </div>
    </template>