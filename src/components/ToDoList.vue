<template>
  <ul class="main__list">
    <to-do-element
      v-for="item in items"
      :key="item.id"
      :item="item"
      @remove="$emit('remove', item)"
      @filtredItems="$emit('filtredItems', item)"
    />
  </ul>
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
};
</script>

<style></style>
