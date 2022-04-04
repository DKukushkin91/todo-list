<template>
  <main class="main">
    <div class="main__container">
      <to-do-form @create="createItem" />
      <div class="main__wrapper">
        <to-do-fieldset
          v-for="fieldset in fieldsets"
          :key="fieldset.id"
          :fieldset="fieldset"
          :items="items"
          :checkedItems="checkedItems"
          @remove="removeItem"
          @filtredItems="filtredItems"
        />
      </div>
    </div>
  </main>
</template>

<script>
import ToDoForm from "@/components/ToDoForm.vue";
import ToDoFieldset from "@/components/ToDoFieldset.vue";

export default {
  components: {
    ToDoForm,
    ToDoFieldset,
  },
  data() {
    return {
      items: [],
      checkedItems: [],
      fieldsets: [
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
  methods: {
    createItem(item) {
      this.items.push(item);
    },

    removeItem(item) {
      this.items = this.items.filter((i) => i.id !== item.id);
      this.checkedItems = this.checkedItems.filter((i) => i.id !== item.id);
    },

    filtredItems(element) {
      let index = this.items.indexOf(element);
      const indexCheck = this.checkedItems.indexOf(element);
      const getCheck = (e) => e.splice(element.index, 1);

      if (element.checked === true) {
        this.checkedItems.push(...getCheck(this.items, index));
      } else {
        this.items.push(...getCheck(this.checkedItems, indexCheck));
      }
    },
  },
};
</script>

<style>
:root {
  --ff: Arial, Helvetica, sans-serif;
}

body {
  margin: 0;
  width: 100%;
  height: 100%;
}

.main {
  width: 100%;
}

.main__container {
  width: 100%;
  max-width: 900px;
  padding: 0 40px;
  margin: 0 auto;
  box-sizing: border-box;
}

.main__wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
