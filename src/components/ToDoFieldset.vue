<template>
  <fieldset class="fieldset">
    <legend class="legend">{{ fieldset.title }}</legend>
    <to-do-list
      class="list"
      v-if="fieldset.title === 'ToDo'"
      :items="items"
      :key="Math.random()"
      @remove="$emit('remove', ...items)"
      @filtredItems="$emit('filtredItems', ...items)"
    />
    <to-do-list
      class="list--complete"
      v-else
      :items="checkedItems"
      :key="Math.random()"
      @remove="$emit('remove', ...checkedItems)"
      @filtredItems="$emit('filtredItems', ...checkedItems)"
    />
  </fieldset>
</template>

<script>
import ToDoList from "@/components/ToDoList.vue";

export default {
  components: { ToDoList },
  props: {
    fieldset: {
      type: Object,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    checkedItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.fieldset {
  width: 50%;
  padding: 0;
  margin: 0;
  border: 0;
  border-top: 1px solid #9d9da9;
}

.fieldset:not(:last-child) {
  margin-right: 10px;
}

.legend {
  font-family: var(--ff);
  padding: 0 10px;
  margin: 0 auto;
  margin-bottom: 20px;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}
</style>
