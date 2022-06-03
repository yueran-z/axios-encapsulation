.<template>
  <p>{{count}}</p>
  <button @click="addCount(5)">count+5</button>
</template>

<script>
import store from '@/store/index.js'
export default {
methods:{
        addCount(){
        store.commit({
            type:'increment',
            amount: addedCount
        });
    }
},
computed:{
    count(){
        return store.state.count
    }
}
}
</script>

<style>

</style>