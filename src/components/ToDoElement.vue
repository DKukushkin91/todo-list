<template>
  <li class="item">
    <my-check-box
      v-model="newItem.checked"
      class="checkbox"
      type="checkbox"
      :checked="newItem.checked"
      @change="$emit('filtredItems', checkHandler(item))"
    />
    <my-input
      class="input-item"
      type="text"
      :readonly="item.edit"
      v-model="newItem.title"
      ref="myInput"
    />
    <my-button class="btn" @click="editTask(item)">Edit</my-button>
    <my-button class="btn" :key="Math.random()" @click="$emit('remove', item)">
      Remove
    </my-button>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Array,
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
      this.newItem.edit = item.edit;
      this.$refs.myInput.$el.focus();
    },

    checkHandler(item) {
      return (item.checked = this.newItem.checked);
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  width: 100%;
  align-items: center;
  cursor: grab;
  background-color: bisque;
  padding: 10px;
  box-sizing: border-box;
}

.item:nth-child(even) {
  background-color: white;
}

.checkbox {
  width: 20px;
  height: 20px;
  margin: 0;
  margin-right: 10px;
}

.input-item {
  border: 0;
  padding: 0;
  margin: 0;
  margin-right: 10px;
  font-family: var(--ff);
  font-size: 16px;
  line-height: 1.4;
  outline: none;
  flex: 1 0 auto;
  cursor: inherit;
  background-color: inherit;
}

.btn {
  background: 0;
  border: 0;
  cursor: pointer;
  padding: 0;
}

.btn:not(:last-child) {
  margin-right: 10px;
}
</style>
