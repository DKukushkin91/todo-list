<template>
  <fieldset class="main__fieldset">
    <legend class="main__legend">{{ fieldset.title }}</legend>
    <to-do-list
      v-if="fieldset.title === 'ToDo'"
      :items="items"
      @remove="$emit('remove', ...items)"
      @filtredItems="$emit('filtredItems', ...items)"
    />
    <to-do-list
      v-else
      :items="checkedItems"
      @remove="$emit('remove', ...items)"
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
