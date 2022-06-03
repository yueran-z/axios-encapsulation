<template>


<el-form ref="form" :model="form" :rules="rules" label-width="80px" label-position="left" >
    <el-form-item label="活动区域" prop="area">
        <el-input v-model="form.area" placeholder="请输入活动区域"></el-input>
    </el-form-item>
    <el-form-item prop="name">
        <div $slots="label">
            <span>活动名称</span>
            <el-input v-model="form.name" placeholder="请输入活动名称"></el-input>
        </div>
    </el-form-item>
    <el-button @click="submitForm()">送出</el-button>
</el-form>

<el-row :gutter="30" type="flex" justify="center">
  <el-col :span="6"><div class="red h-30"></div></el-col>
  <el-col :span="6"><div class="blue h-30"></div></el-col>
  <el-col :span="6"><div class="green h-30"></div></el-col>
</el-row>
<el-row :gutter="30" type="flex" justify="space-between">
  <el-col :span="6"><div class="red h-30"></div></el-col>
  <el-col :span="6"><div class="blue h-30"></div></el-col>
  <el-col :span="6"><div class="green h-30"></div></el-col>
</el-row>
</template>

<script>
export default {
    name:'eleLayout',
    data(){
      let areaVaild = (rule,value,callback)=>{
        if(value.trim().length==0){
          callback(new Error("活动区域内容不得为空"))
        }else{
          callback()
        }
      };
      let nameVaild = (rule,value,callback)=>{
        if(value.trim().length == 0){
          callback(new Error(活动名称内容不得为空))
        }else{
          callback()
        }
      }
    return{
      area: '',
      name: '',
      rules:{
        area: [{validator:areaVaild, trigger: 'blur'}],
        name:[{validator:nameVaild, trigger: 'blur'}]
      }
    }
    },
    methods: {
      submitForm(){
        this.$refs.form.validate((valid) =>{
          if(valid) {
            alert("submit")
          }else{
            alert(" error")
          }
        })
      }
    }
}
</script>

<style>

</style>