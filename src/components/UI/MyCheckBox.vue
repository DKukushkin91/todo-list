<template>
  <input
    class="main__checkbox"
    :id="id"
    v-model="computedValue"
    type="checkbox"
    :name="name"
    :disabled="disabled"
    :indeterminate="indeterminate"
    :true-value="trueValue"
    :false-value="falseValue"
    :value="value"
    :checked="checked"
  />
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
    value: [String, Number, Array],
    trueValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    falseValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    checked: Boolean,
    id: String,
    name: String,
    round: Boolean,
    disabled: Boolean,
    indeterminate: Boolean,
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
