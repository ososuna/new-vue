<script setup lang="ts">
import { RouterView } from 'vue-router';
import { routeLinks } from '@/router/link-routes';
import NavBarComponent from '@/shared/components/NavBarComponent.vue';
</script>

<template>
  <div class="wrapper">
    <header>
    <NavBarComponent
      title="Rick and Morty"
      :links="routeLinks"
    />
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
