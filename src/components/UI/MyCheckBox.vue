<template>
  <input
    class="main__checkbox"
    :checked="modelValue"
    @change="updateInput"
    type="checkbox"
  />
</template>

<script>
export default {
  name: "my-check-box",
  props: {
    modelValue: Boolean,
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.checked);
    },
  },
};
</script>

<style></style>
