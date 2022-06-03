<template>

</template>

<script>
import { getBookList } from '../utils/API';
export default {

    getBookList ({
        page: 5,
    }).then(res=> {
        console.log(res);
    })
}
</script>

<style>

</style>