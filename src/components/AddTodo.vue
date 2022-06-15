<script>
import { v4 as uuidv4 } from 'uuid';

export default{
    name:'AddTodo',
    data(){
        return{
            title:"",
            description:""
        }
    },
    methods:{
        addTodo(event){
            event.preventDefault()
            const newTodoObj = {
                id:uuidv4(),
                title:this.title,
                description: this.description,
                status:false
            }

            // sending newTodoObj to add-todo v-on
            // emitting event using $emit
            this.$emit('add-todo',newTodoObj)

            this.title=""
            this.description=""
        }
    }
}
</script>

<template>
    <div>
        <form @submit="addTodo">
            <input type="text" v-model="title" name="title"/>
            <input type="text" v-model="description" name="description" />
            <button type="submit">Add</button>
        </form>
    </div>
</template>

<style>
</style>