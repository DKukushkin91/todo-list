<template>
  <li class="main__item">
    <input class="main__checkbox" type="checkbox" />
    <my-input
      class="main__input-item"
      type="text"
      v-model="item.title"
      v-bind:readonly="item.edit"
    />
    <my-button class="main__btn" @click="editTask(item)">Edit</my-button>
    <my-button class="main__btn">Remove</my-button>
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
  methods: {
    editTask(item) {
      item.edit = false;
    },
    updateInput(evt) {
      this.$emit("update:modelValue", evt.target.value);
    },

    // doCheck(index, type) {
    //   if (type === "unchecked") {
    //     const completeMask = this.itemsList.splice(index, 1);
    //     this.completeList.push(...completeMask);
    //   } else {
    //     const noCompleteMask = this.completeList.splice(index, 1);
    //     this.itemsList.push(...noCompleteMask);
    //   }
    // },

    removeTask(index, type) {
      const toDoList =
        type === "unchecked" ? this.itemsList : this.completeList;
      toDoList.splice(index, 1);
    },
  },
};
</script>

<style></style>
