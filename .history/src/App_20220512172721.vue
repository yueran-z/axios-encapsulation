<template>
  <div>
    <el-button type="primary">el-button</el-button>
  </div>

  <router-view>
  </router-view>
</template>

<script>
import Login from "@"
export default {
  name: 'App',
  components: {
    Login
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
