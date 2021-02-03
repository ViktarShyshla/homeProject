<template>
  <div :class="$style.container">
    <div :class="$style.header">
      <label>ToDos</label>
    </div>
    <div :class="$style.content">
      <div id="todo-list-example">
        <form :class="$style.form">
          <Input
            :class="$style.input"
            v-model="newTodoText"
            id="new-todo"
            placeholder="Например, покормить кота"
          />
          <Button
            v-bind:title="message"
            :class="$style.button"
            v-on:click.prevent="addNewTodo"
            textButton="Create"
          />
        </form>
        <ul>
          <li
            v-for="(todo, index) in todos"
            v-bind:key="todo.id"
            v-bind:title="todo.title"
            v-on:remove="todos.splice(index, 1)"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/basic/Input";
import Button from "@/components/basic/Button";
export default {
  components: {
    Input,
    Button,
  },

  data() {
    return {
      newTodoText: "",
      todos: [],
      nextTodoId: "",
      message: "Вы загрузили эту страницу: " + new Date().toLocaleString(),
    };
  },
  methods: {
    addNewTodo: function() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      });
      this.newTodoText = "";
    },
  },
  // data() {
  //   return {
  //     items: [{ message: "Foo" }, { message: "Bar" }],
  //   };
  // },
};
</script>

<style lang="scss" module>
@import "@/assets/styles/fonts";
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .header {
    background: $gray;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    label {
      color: white;
    }
  }
  .content {
    width: 50rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .form {
      display: flex;
      border: 0.1rem solid;
      border-radius: 0.25rem;
      input {
        background: none;
      }
      .button {
        color: rgb(255, 255, 255);
        background: none;
        label {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
