Vue.createApp({
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
}).mount("#app");
