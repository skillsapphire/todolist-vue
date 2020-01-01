<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="titleData" name="title" placeholder="Add Todo..." />
      <input type="submit" value="Submit" class="btn btn-primary" />
    </form>
  </div>
</template>
<script>
//import uuid from "uuid";
export default {
  name: "AddTodo",
  data() {
    return {
      titleData: ""
    };
  },
  methods: {
    // 1st contruct the new todo object than emit
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        // not required anymore because json place holder returns id
        //id: uuid.v4(),
        title: this.titleData,
        completed: false
      };
      // send up to the parent this new todo by emitting event
      this.$emit("add-todo", newTodo);
      this.titleData = "";
    }
  }
};
</script>
<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 5px;
}
input[type="submit"] {
  flex: 2;
}
</style>