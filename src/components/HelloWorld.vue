<template>
  <div :class="$style.container">
    <label>ToDos</label>
    <div :class="$style.content">
      <div id="todo-list-example">
        <form :class="$style.input" v-on:submit.prevent="addNewTodo">
          <Input
            v-model="newTodoText"
            id="new-todo"
            placeholder="Например, покормить кота"
          />
          <Button
            v-bind:title="message"
            :class="$style.button"
            textButton="Добавить"
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
      <div :class="$style.list">
        <li v-for="item in items" :key="item.message">
          {{ item.title }}
        </li>
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

  .content {
    max-width: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .input {
      display: flex;

      .button {
        color: rgb(255, 255, 255);
        label {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
