<script setup>
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import AppNavbar from "@/components/Navbar/AppNavbar.vue";

defineComponent({
  RouterView,
  AppNavbar,
});
</script>

<template>
  <div>
    <header>
      <AppNavbar />
    </header>
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";
</style>
