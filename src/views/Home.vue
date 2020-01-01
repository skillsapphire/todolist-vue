<template>
  <div id="app" class="container">
    <AddTodo v-on:add-todo="addTodoMethod" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"></Todos>
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo(id) {
      axios
        .delete("https://jsonplaceholder.typicode.com/todos/{id}")
        .then(response => {
          this.todos = this.todos.filter(todo => todo.id != id);
          alert("Todo deleted successfully" + response.data);
        })
        .catch(err => {
          alert("error while deleting todo " + err);
        });
      //this.todos = this.todos.filter(todo => todo.id != id);
    },
    addTodoMethod(newTodo) {
      const { title, completed } = newTodo;
      axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title,
          completed
        })
        .then(response => (this.todos = [...this.todos, response.data]))
        .catch(err => {
          alert("error while adding todo " + err);
        });
      // spread operator, keep what is in this array add more
      // this.todos = [...this.todos, newTodo];
    }
  },
  // works same as ngoninit or componentdidmount
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(response => (this.todos = response.data))
      .catch(err => {
        alert("error while loading todos " + err);
      });
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
