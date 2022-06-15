// - Create Repo with project name => small letters
// - Vue create project_name/folder_name
// - Delete the boiler plate based code
// - Create Components that are necessary
//     - App
//         - Todos
//         - Todo 
// - Import Todo in Todos
// - Import Todos in App
// READ
// ———
// - App => Create Initial State : data(): { return todos Array}
// - Send todos as prop to Todos Component => v-bind:todos=“todos” from App.vue
// - Call the props props:[ “todos”] in Todos Component
// - Send todo Prop by iterating it with v-for=“todo in todos” <Todo v-bind:todo=“todo” />
// - Call the props props:[“todo”] in Todo Component
// - Todo Component => Displaying it in paragraph

// CREATE
// ————
// - AddTodo
// - Created a form with input tags and submit button
// - data():{title=“”, description=“”} 
// - onSubmit = “addTodo”
// - methods: {addTodo(event){ event.preventDefault newObj $emit(‘add-todo’,newObj) this.title=“” this.description=“” }}
// - Called the AddTodo in App under components
// - V-on: addTodo(), methods: addTodo(todoObj){ this.todos = […this.todos, todoObj ]}

// UPDATE
// ————
// - Todo Component
// - markComplete () { this.todo.status != this.todo.status}
// - V-bind:class {complete:this.todo.status}
// - V-on:click data bind along with click
// - <style> complete: {color:green} </style>


// DELETE
// ————
// - Todo Component => button delete 
// - V-on-click => delteTodo (){$emit(‘delete-todo’, todo.id)}
// - Collected todoId in Todos Component => v-on:app-delete-todo, todoID
// - Collected todoId in App component => delte-todo () { filter(!element.id == todoID)}
