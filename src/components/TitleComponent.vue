<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div class="flex justify-center mx-auto">
    <span class="font-bold text-3xl drop-shadow-2xl text-[#2dc1b8]">
      {{ text }}
    </span>
  </div>
</template>
