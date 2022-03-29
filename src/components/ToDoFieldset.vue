<template>
  <fieldset class="main__fieldset">
    <legend class="main__legend">{{ fieldset.title }}</legend>
    <to-do-list
      v-if="fieldset.title === 'ToDo'"
      :items="items"
      @remove="$emit('remove', ...items)"
      @check="$emit('check', ...items)"
    />
    <!-- <to-do-list
      v-else
      :items="checkItems"
      @remove="$emit('remove', ...items)"
      @check="$emit('check', ...items)"
    /> -->
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
  },
};
</script>

<style></style>
