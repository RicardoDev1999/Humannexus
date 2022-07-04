<script setup>
import { defineComponent, ref } from "vue";
import AppNavbarItem from "@/components/Navbar/AppNavbarItem.vue";
import ThemeToggle from "../ThemeToggle.vue";
const showMenu = ref(false);

defineComponent({
  AppNavbarItem,
  ThemeToggle,
});

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <nav class="bg-#F5F5F5 border-gray-200 px-2 sm:px-4 py-2.5">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="/" class="flex items-center">
        <img
          src="http://www.humannexus.pt/online/images/site/logo/logo_humannexus.png"
          class="mr-3 h-6 sm:h-9"
          alt="Humannexus"
        />
      </a>
      <button
        v-on:click="toggleMenu()"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          class="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div :class="{ hidden: !showMenu }" class="w-full md:block md:w-auto">
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
        >
          <AppNavbarItem to="/" text="Home" />
          <AppNavbarItem to="/about" text="About" />
          <ThemeToggle />
        </ul>
      </div>
    </div>
  </nav>
</template>
