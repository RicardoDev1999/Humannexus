<script>
import { ref } from "vue";

export default {
  props: {
    startFrom: {
      type: Number,
      default: 0,
    },
    countUpTo: {
      type: Number,
      default: 1,
    },
    secondsToFinish: {
      type: Number,
      default: 3,
    },
  },
  setup(props) {
    const counter = ref(props.startFrom);

    const delay = (props.secondsToFinish * 1000) / props.countUpTo;

    const run = () =>
      setTimeout(() => {
        counter.value = counter.value + 1;
        if (counter.value < props.countUpTo) {
          run();
        }
      }, delay);

    run();

    return { counter };
  },
};
</script>

<template>
  <span>{{ counter }}</span>
</template>
