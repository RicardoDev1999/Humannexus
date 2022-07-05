<script>
export default {
  props: {
    identifier: {
      type: String,
      default: "",
    },
    buttonText: {
      type: String,
      default: "Segue-nos!",
    },
    href: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div
    class="flex flex-col items-center w-80 bg-white rounded-sm border border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-md p-4"
  >
    <slot name="icon" />
    <span class="text-md text-black dark:text-white">{{ identifier }}</span>
    <a :href="href" target="_blank">
      <div
        class="text-black font-xl font-semibold border border-[#2dc1b8] bg-[#2dc1b8] rounded-md hover:bg-opacity-90 hover:cursor-pointer py-2 px-4 mt-6 mb-2 shadow-xl hover:shadow-lg"
      >
        {{ buttonText }}
      </div>
    </a>
  </div>
</template>
