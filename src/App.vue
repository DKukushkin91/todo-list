<template>
  <main class="main">
    <div class="main__container">
      <item-form @create="createItem" />
      <div class="main__wrapper">
        <to-do-list :items="items" @remove="removeItem" />
        <!-- <fieldset class="main__fieldset">
          <legend class="main__legend">Done</legend>
          <ul class="main__list main__list--complete">
            <li
              class="main__item"
              v-for="(item, index) in completeList"
              :key="item.id"
            >
              <input
                class="main__checkbox"
                type="checkbox"
                @change="doCheck(index, 'checked')"
                checked
              />
              <input
                class="main__input-item"
                type="text"
                v-bind:value="item.title"
                v-bind:readonly="item.edit"
              />
              <button class="main__btn" @click="editTask(item)">Edit</button>
              <button class="main__btn" @click="removeTask(index, 'checked')">
                Remove
              </button>
            </li>
          </ul>
        </fieldset> -->
      </div>
    </div>
  </main>
</template>

<script>
import ItemForm from "@/components/ItemForm.vue";
import ToDoList from "@/components/ToDoList.vue";

export default {
  components: {
    ItemForm,
    ToDoList,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    createItem(item) {
      this.items.push(item);
    },
    removeItem(item) {
      this.items = this.items.filter((i) => i.id !== item.id);
    },
  },
};
</script>

<style></style>
