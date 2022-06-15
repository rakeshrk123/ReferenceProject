<script>
import Todo from './Todo.vue'

export default{
    name:'Todos',
    components:{
        Todo
    },
    props:[
        "todos"
    ],
   
}
</script>
<template>
    <div>
        <h1>TODO LIST</h1>
        <ul>
            <li v-bind:key="todo.id" v-for="todo in todos">
                <Todo v-on:todos-delete-todo=" $emit('app-delete-todo',todo.id)" v-bind:todo="todo" />
                
                <!--<PEN color="blue" type="ballpen" />-->
                <!--
                    <Todo v-on:todos-delete-todo=" $emit('app-delete-todo',1)" v-bind:todo="todo" />
                    <Todo v-on:todos-delete-todo=" $emit('app-delete-todo',2)" v-bind:todo="todo" />
                    <Todo v-on:todos-delete-todo=" $emit('app-delete-todo',3)" v-bind:todo="todo" />
                -->
            </li>
            <!--
            <li key="1">
                <Todo todo="{id:1, name: 'ES6', status:false}" />
            </li>
            <li key="2">
                <Todo todo="{id:2, name: 'Vue', status:false}" />
            </li>
            -->
        </ul>
    </div>
</template>

<style>
</style>