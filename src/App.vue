

<template>
  <div id="app">
    <!--Child Component Todo is binded with the data in App Component-->
    <Todos  v-bind:todos="todos" v-on:app-delete-todo="deleteTodo" />
    <AddTodo v-on:add-todo="addTodo" />
   </div>
</template>

<script >
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'

export default {
  name: 'app',
  components: {
    Todos,
    AddTodo
  },
  data() { // Initial State
    return {
      todos: [
        {
          id: 1,
          title: "ES6 Classes",
          description:'Modern Javascript',
          status: false
        }
      ]
    }
  },
  methods:{
    addTodo(newTodoObj){
      // Combining old ones with the new one
      this.todos = [ ...this.todos, newTodoObj]
    },
    deleteTodo(todoId){
      console.log(todoId)
      this.todos = this.todos.filter((element, index) =>  {
          return  element.id !== todoId
        }
      )
      console.log(this.todos)
    }
  }
}
</script>

<style>
</style>
