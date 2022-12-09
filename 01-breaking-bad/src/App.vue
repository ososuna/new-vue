<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavBarComponent from '@/shared/components/NavBarComponent.vue';
</script>

<template>
  <div class="wrapper">
    <header>
    <NavBarComponent />
    </header>
    <main>
      <RouterView />
    </main>
  </div>  
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
