<template>
  
</template>

<script>
import { apiGetArticleItem, apiGetSearch } from "@/api"; 
import { ref, onMounted } from "vue"
export default {
    setup() {
        const getData = async () => {
            try {
                const item = await apiGetArticleItem()
                const search = await apiGetSearch()

                // 其他的处理
            }catch (err) {
                Promise.reject(err)
            }
        }
    }
    
}
</script>

<style>

</style>