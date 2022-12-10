<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBarComponent from '@/shared/components/NavBarComponent.vue';
import characterRoute from '@/characters/router/index';

console.log(characterRoute);

</script>

<template>
  <h1>Character Layout</h1>
  <!-- Navbar -->
  <NavBarComponent :show-icon="false" />
  <!-- RouterVew + Suspense -->
  <RouterView />
</template>

<style scoped>

</style>