<template>
  <ToDos />
</template>

<script>
import ToDos from "./components/ToDos.vue";

export default {
  name: "App",
  components: {
    ToDos,
  },
};
</script>

<style>
#app {
  width: 100%;
  margin: 0;
}
</style>
