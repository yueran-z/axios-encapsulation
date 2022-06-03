<template>
    <div class="login">
        <el-form :model="loginForm" ref="loginForm" :rules="loginRules" status-icon @keyup.enter.prevent="submitForm()">
            <el-form-item prop="username">
                <div $slot="label">
                    <span>账号</span>
                </div>
                <el-input v-model="loginForm.username" placeholder="登入帳號"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <div $slot="label">
                    <span>密码</span>
                </div>
                <el-input type="password" v-model="loginForm.password" placeholder="登入密碼"></el-input>
            </el-form-item>
            <el-button type="warning" @click="submitForm()">登入</el-button>
        </el-form>
    </div>
</template>
</template>

<script>
export default {
    name: 'login',
    data(){
        let usernameValid = (rule,value,callback)=>{
            if(value.trim().length == 0){
                return callback(new Error("请输入账号"))
            }else{
                return callback()
            }
        };
        let passwordValid = (rule,value,callback)=>{
            if(value.trim().length==0){
            return callback(new Error("请输入密码"))
        }else{
            return callback()
        }
        };
        return{
            loginForm:{
                username:'',
                password:'',
            },
            loginRules:{
                username:[{validator:usernameVaild, trigger: 'blur'}],
                password:[{validator:passwordVaild, trigger: 'blur'}]
            }
        }
    },
methods: {
    submitForm(){
        this.$refs.loginForm.validate(valid =>{
            if(valid){
                this.$message.success({
                    showClose:true,
                    duration: 2500,
                    message:"登入成功"
                })
            }
        })
    }
},


}
</script>

<style>

</style>