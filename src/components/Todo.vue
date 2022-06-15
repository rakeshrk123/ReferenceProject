<script>
export default{
    name:'Todo',
    props:[
        "todo"
    ],
    methods:{
        markComplete(){
            this.todo.status = !this.todo.status
        },
        deleteTodo(){
            this.$emit('todos-delete-todo',this.todo.id)
        }
    }
}
</script>

<template>
    <div v-bind:class="{'completed':todo.status}">
        <!--Data Binding and Executing a Method-->
        <p v-on:click="markComplete">{{todo.title}}</p>
        <p>{{todo.description}}</p>
        <p>{{todo.status}}</p>
        <!--Emitting Event-->
        <button v-on:click="deleteTodo">Delete Todo</button>
    </div>
</template>

<style>
.completed{
    color:green
}
</style>