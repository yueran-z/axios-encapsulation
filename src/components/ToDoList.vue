<template>
            <div class="todolist-header">ToDoList</div>
    <div class="todolist-input-area">
        <input v-model="new_todolist_name"/>
        <button type="button" @click="add_todolist()">新增</button>
    </div>
    <div class="todolist-state-group">
        <button class="state-all" @click="change_todolist_mode('all')">全部</button>
        <button class="state-undone" @click="change_todolist_mode('undone')">
        未完成
        </button>
        <button class="state-completed" @click="change_todolist_mode('completed')">
        已完成
        </button>
    </div>

    <table class="todolist-table">
        <thead class="todolist-table-head">
        <th>完成</th>
        <th>事项</th>
        <th>控件</th>
        </thead>
        <tbody class="todolist-table-content">
        <tr v-for="(item,index) in todolist" :key="index"   class="todolist-table-item">
            <td><input type="checkbox" :id="`checkbox_item_${index}`" v-model="item.state"/></td>
            <td><span :id="`checkbox_item_${index}`">{{item.name}}</span></td>
            <td><button type="button" @click="delete_todolist(item.id)"></button>刪除</td>
        </tr>
        </tbody>
    </table>

    <button type="button" @click="computedValue += 1">click me</button>
    <div v-text="computedValue"></div>

<!-- <ul>
    <li is="meau"></li>
    </ul> -->
</template>


<script>
import meau from '@/components/menu.vue'
export default {
    name: 'ToDoList',
data(){
        list_order: 0;// 需要一个变数来给予不重复的ID
        mode:'all';//一个变数来判断目前显示的内容
        new_todolist_name:''; //新增项目时，需要一个变数来存储新项目的内容
        todolist:[]; //回传符合目前状态的项目
        value:1
    },
    computed:{
        filterTodolist(){//及时反映目前该显示的值
        if (this.mode == 'all'){
            return this.todolist;
        }else if(this.mode == 'undone'){
            return this.todolist.filter((item) =>{
                if(item.state == false){
                    return item
                }
            })
        }else{
            return this.todolist.filter((item) =>{
                if(item.state == true){
                    return item
                }
            })
        }

        },
        computedValue: {
            get(){
                return this.value*5
            },
            set(getValue){
                this.value += getValue*2
            }
        }
    },
    methods:{
        add_todolist(){//新增项目事件
            this.order += 1;
            this.todolist.push({
                id:this.order,
                name:this.new_todolist_name,
                state:false
            })
        },
        change_todolist_mode(){
            this.mode = mode;
        },
        delete_todolist(todolist_id){
            this.todolist.forEach((item,index) => {
                if(item.id == todolist_id){
                    this.todolist.splice(index,1)
                }
            });
        }
    },
    components:{
        meau
    }
}

</script>

<style></style>
