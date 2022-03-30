<template>
  <input
    class="main__checkbox"
    :checked="shouldBeChecked"
    :value="value"
    @change="updateInput"
    type="checkbox"
  />
</template>

<script>
export default {
  name: "my-check-box",
  model: {
    prop: "moduleValue",
    event: "change",
  },

  props: {
    value: {
      type: String,
    },
    modelValue: {
      default: false,
    },
    trueValue: {
      default: true,
    },
    falseValue: {
      default: false,
    },
  },

  computed: {
    shouldBeChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      return this.modelValue === this.trueValue;
    },
  },

  methods: {
    updateInput(event) {
      let isChecked = event.target.checked;

      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];

        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }

        this.$emit("change", newValue);
      } else {
        this.$emit("change", isChecked ? this.trueValue : this.falseValue);
      }
    },
  },
};
</script>

<style></style>
