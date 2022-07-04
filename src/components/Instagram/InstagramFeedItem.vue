<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <a
    class="flex flex-wrap w-1/3 cursor-pointer transition transform hover:scale-95"
    :href="props.item.postUrl"
    target="_blank"
  >
    <div class="w-full p-1 md:p-2">
      <img
        class="block object-cover object-center w-full h-full rounded-lg"
        :src="props.item.thumbnailSrc"
        crossorigin
      />
    </div>
  </a>
</template>
