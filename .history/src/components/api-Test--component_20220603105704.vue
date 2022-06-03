<template>
  
</template>

<script>
import { apiGetArticleItem, apiGetSearch } from "../api"
import { ref, onMounted } from "vue"
export default {
   setup() {
       const getData = async () => {
           try {
               const item = await apiGetArticleItem()
               const search = await apiGetSearch()
             		
               // 其他的处理
             
           } catch (err) {
             	console.error(err)
           }
       }
        
       onMounted(()=> {
         getData()
       })

       return {}
   },
}

作者：yueran
链接：https://juejin.cn/post/7104101906611437576
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

</script>

<style>

</style>