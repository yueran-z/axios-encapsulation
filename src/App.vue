<template>
  <div>
  <ToDoList></ToDoList>
  <eleLayout></eleLayout>
    <router-view></router-view>
  </div>
</template>

<script>
import ToDoList from '@/components/ToDoList.vue'
import eleLayout from '@/components/eleLayout.vue'
export default {
  name: 'App',
  components: {
    ToDoList,
    eleLayout
},
  
}
</script>

<style>

</style>
