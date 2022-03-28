<template>
  <form class="form" action="" @submit.prevent>
    <my-input class="input" type="text" v-model="item.title" />
    <button class="btn" @click="addTask">Add new task</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      item: {
        id: Math.random(),
        edit: true,
        title: "",
      },
    };
  },

  methods: {
    addTask() {
      if (this.item.title === "") {
        return;
      }
      this.$emit("create", this.item);
      this.item = {
        id: Math.random(),
        edit: true,
        title: "",
      };
    },
  },
};
</script>

<style scoped>
.form {
  width: 100%;
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input {
  width: 100%;
  max-width: 300px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.4;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  margin-right: 5px;
  border: 1px solid #9d9da9;
  border-radius: 5px;
}

.btn {
  width: fit-content;
  padding: 12px;
  margin: 0;
  border: 0;
  background-color: bisque;
  font-size: 14px;
  line-height: 1.4;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 5px;
}
</style>
