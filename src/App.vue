<template>
  <main class="main">
    <div class="main__container">
      <to-do-form @create="createItem" />
      <div class="main__wrapper">
        <to-do-fieldset
          :items="items"
          v-for="fieldset in fieldsets"
          :fieldset="fieldset"
          :key="fieldset.id"
          @remove="removeItem"
          @check="doCheck"
        />
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
    },

    doCheck(item) {
      if (!item.checked) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    },
  },
};
</script>

<style></style>
