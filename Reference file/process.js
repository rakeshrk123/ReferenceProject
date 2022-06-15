// => Process
// 1. Installed your vue => vue create project_name
// 2. Empty your components boiler plate
// 3. Todo App
//     1. Todos.vue
//     2. Todo.vue
// 4. Added Todos to App.vue
// 5. App.vue
//     1. name: App
//     2. Imported component => under component of your options api
//     3. Created the list of todos under data
//     4. Bonded it using v-bind to Todos Component => todos [{},{}]
// 6. Todos.vue
//     1. Name: Todos
//     2. Props from options api
//     3. V-bind with Todo => todo object {}
//     4. <li v-for by changing the object from array of todos> 
//     5. Key => todo.id
// 7. Todo.vue
//     1. name: Todo
//     2. Called the props todo 
//     3. Using todo todo.title and todo.description
// 8. AddTodo.vue
//     1. name: AddTodo
//     2. Created a Form => template
//     3. Input, submit, @submit => addTodo
//     4. Methods: addTodo(event) => event.prevenDefault()  const newObj = {id: uuid, title:this.title, description:this.description, status: false} this.$emit(add-todo, newObj) this.title=“” this.description =“”
//     5. data(): {title:””, description:””}
// 9. App.vue
//     1. V-on:add-Todo = “addTodo”
//     2. Methods:addTodo(){this.todos = […this.todos, newObj]}
// 10. Update Todo
//     1. V-on-click => data  with event emissions
//     2. V-bind-class  => conditional styling
//     3. Updates this.todo.status != this.todo.status
// 11. Delete Todo
//     1. Nested Component
//         1. Todo => todoId => v-on => emitted the event onClick
//         2. Todos => todoId => v-on => emitted without event 
//         3. App => todoId => filtered  => Array.filter()



// APP => id and trying to filter the whole state which is containing your todos:[]
//  => Todos app-delete-todo: 1
// 		=> Todo => todos-delete-do : 1

// Two Way Binding
// App => todos => Todos.vue => todos => Todo.vue
// Todo.vue => todoId => Todos.vue => todoId => App.vue => filter