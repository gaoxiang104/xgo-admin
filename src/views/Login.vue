<template>
  <div class="bk-dark login-container">
    <el-form
      class="login-form"
      :model="formLogin"
      :rules="rulesLogin"
      ref="refFormLogin"
    >
      <div class="login-form-title">{{ title }}</div>
      <el-form-item prop="name">
        <el-input
          prefix-icon="el-icon-user"
          v-model="formLogin.name"
          placeholder="请输入账户"
          autofocus
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          prefix-icon="el-icon-lock"
          v-model="formLogin.password"
          placeholder="请输入密码"
          show-password
          @keyup.enter.native="onLogin"
        ></el-input>
      </el-form-item>
      <el-button class="login-btn" type="primary" @click="onLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      // title
      title: "系统登录",
      // form
      formLogin: {
        name: "",
        password: ""
      },
      // rules
      rulesLogin: {
        name: [
          { required: true, message: "请输入账户", trigger: "blur" },
          { min: 2, max: 20, message: "长度在 2 到 20 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 20, message: "长度在 5 到 20 个字符", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    console.log("Login.vue created.......");
  },
  methods: {
    onLogin() {
      this.$refs["refFormLogin"].validate(valid => {
        if (valid) {
          console.log("submit!!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login-container {
  .el-form-item {
    border: 1px solid hsla(0, 0%, 100%, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .el-input__inner {
    background: transparent;
    border: none;
    -webkit-appearance: none;
    border-radius: 0px;
    // padding: 12px 5px 12px 15px;
    color: white;
    height: 47px;
    caret-color: white;
  }
}
</style>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;

  // display: flex;
  // justify-content: center;
}
.login-form {
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  box-sizing: border-box;

  .login-form-title {
    // width: ;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    color: #fafafa;
    margin-bottom: 40px;
  }
  .login-btn {
    width: 100%;
    letter-spacing: 15px;
    margin-bottom: 22px;
  }
}
</style>
