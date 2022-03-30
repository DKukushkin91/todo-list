<template>
  <li class="main__item">
    <my-check-box
      v-model="newItem.checked"
      class="main__checkbox"
      type="checkbox"
    />
    <my-input
      class="main__input-item"
      type="text"
      :readonly="item.edit"
      v-model="newItem.title"
      ref="myInput"
    />
    <my-button class="main__btn" @click="editTask(item)">Edit</my-button>
    <my-button class="main__btn" @click="$emit('remove', item)">
      Remove
    </my-button>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      newItem: { ...this.item },
    };
  },

  methods: {
    editTask(item) {
      item.edit = false;
      this.$refs.myInput.$el.focus();
    },
  },
};
</script>

<style></style>
