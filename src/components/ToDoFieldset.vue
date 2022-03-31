<template>
  <fieldset class="main__fieldset">
    <legend class="main__legend">{{ fieldset.title }}</legend>
    <to-do-list
      v-if="fieldset.title === 'ToDo'"
      :items="items"
      :key="Math.random()"
      @remove="$emit('remove', ...items)"
      @filtredItems="$emit('filtredItems', ...items)"
    />
    <to-do-list
      class="main__list--complete"
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

<style></style>
