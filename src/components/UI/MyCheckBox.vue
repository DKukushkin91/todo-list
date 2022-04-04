<template>
  <input class="checkbox" v-model="computedValue" type="checkbox" />
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "my-check-box",
  props: {
    moduleValue: {
      Boolean,
      String,
      Number,
      Array,
    },
  },

  emmits: ["update:modelValue"],

  setup: (props, { emit }) => {
    const computedValue = computed({
      get() {
        return props.moduleValue;
      },
      set(value) {
        emit("update:moduleValue", value);
      },
    });

    return { computedValue };
  },
};
</script>

<style></style>
