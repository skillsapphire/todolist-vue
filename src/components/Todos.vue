<template>
  <div>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todoItem="todo" v-on:del-todoItem="$emit('del-todo',todo.id)" />
    </div>
  </div>
</template>
<script>
import TodoItem from "./TodoItem";

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todos"]
};
</script>
<style scoped>
</style>