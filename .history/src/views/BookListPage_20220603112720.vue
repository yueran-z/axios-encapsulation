<template>

</template>

<script>
import { getBookList } from '../utils/API';
export default {
    data(){
            getBookList ({
            page: 5,
        }).then(res=> {
            console.log(res);
        })
    }
    
}
</script>

<style>

</style>