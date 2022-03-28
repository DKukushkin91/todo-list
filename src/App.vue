<template>
  <main class="main">
    <div class="main__container">
      <form class="main__form" action="">
        <input
          class="main__input"
          type="text"
          v-bind:value="valueInput"
          @input="inputHandler"
        />
        <button class="main__form-btn" @click.prevent="addTask">
          Add new task
        </button>
      </form>
      <div class="main__wrapper">
        <fieldset class="main__fieldset">
          <legend class="main__legend">ToDo</legend>
          <ul class="main__list">
            <li
              class="main__item"
              v-for="(item, index) in itemsList"
              :key="item.id"
            >
              <input
                class="main__checkbox"
                type="checkbox"
                @change="doCheck(index, 'unchecked')"
              />
              <input
                class="main__input-item"
                type="text"
                v-bind:value="item.title"
                v-bind:readonly="item.edit"
                @input="inputEditHandler"
              />
              <button class="main__btn" @click="editTask(item)">Edit</button>
              <button class="main__btn" @click="removeTask(index, 'unchecked')">
                Remove
              </button>
            </li>
          </ul>
        </fieldset>
        <fieldset class="main__fieldset">
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
        </fieldset>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      valueInput: "",
      itemsList: [],
      completeList: [],
    };
  },
  methods: {
    inputHandler(evt) {
      this.valueInput = evt.target.value;
    },

    inputEditHandler(evt) {
      this.value = evt.target.value;
    },

    addTask() {
      if (this.valueInput === "") {
        return;
      }

      this.itemsList.push({
        title: this.valueInput,
        id: Math.random(),
        edit: true,
      });

      this.valueInput = "";
    },

    editTask(item) {
      item.edit = false;
    },

    doCheck(index, type) {
      if (type === "unchecked") {
        const completeMask = this.itemsList.splice(index, 1);
        this.completeList.push(...completeMask);
      } else {
        const noCompleteMask = this.completeList.splice(index, 1);
        this.itemsList.push(...noCompleteMask);
      }
    },

    removeTask(index, type) {
      const toDoList =
        type === "unchecked" ? this.itemsList : this.completeList;
      toDoList.splice(index, 1);
    },
  },
};
</script>

<style></style>
