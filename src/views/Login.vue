<!--  -->
<template>
<div>
  <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="loginContainer">
    <h3 class="loginTitle">系统登录</h3>
    <el-form-item label="用户名" prop="name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

   <el-form-item label="密码" prop="password">
    <el-input v-model="form.password"></el-input>
  </el-form-item>
  <el-form-item style="text-align:center">
    <el-button type="primary" @click="submitForm('form')">登录</el-button>
  </el-form-item>
   </el-form>  
  </div>
</template>

<script>
export default {
  name:"Login",
  data () {
    return {
      form:{
        name:'',
        password:''
      },
      rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
      password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
      }
    }
  },
  methods: {
       submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push('/main');
          } else {
            alert('error submit!!');
            return false;
          }
        });
    }
  }
  }
</script>

<style>
.loginContainer{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background:#fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
.loginTitle{
    margin: 0px auto 40px auto;
    text-align: center;
}
.loginRemember{
    text-align: left;
    margin: 0px 0px 15px 8px;
}

</style>
