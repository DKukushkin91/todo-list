<template>
  <fieldset class="main__fieldset" v-for="column in columns" :key="column.id">
    <legend class="main__legend">{{ column.title }}</legend>
    <ul v-if="column.title === 'ToDo'" class="main__list">
      <to-do-element v-for="item in items" :item="item" :key="item.id" />
    </ul>
    <ul v-else class="main__list main__list--complete"></ul>
  </fieldset>
</template>

<script>
import ToDoElement from "@/components/ToDoElement.vue";

export default {
  components: {
    ToDoElement,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      columns: [
        {
          id: Math.random(),
          title: "ToDo",
        },
        {
          id: Math.random(),
          title: "Done",
        },
      ],
    };
  },
};
</script>

<style></style>
