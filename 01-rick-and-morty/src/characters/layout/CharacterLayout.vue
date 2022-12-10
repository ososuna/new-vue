<script setup lang="ts">
import { RouterView } from 'vue-router';
import type { RouterLink } from '@/router/link-routes';
import NavBarComponent from '@/shared/components/NavBarComponent.vue';
import characterRoute from '@/characters/router/index';

const routeLinks: RouterLink[] = characterRoute.children!
  .filter( route => (route.props as { title: string, visible: boolean }).visible )
  .map( route => {
    return {
      name: route.name as string,
      path: route.path,
      title: (route.props as { title: string, visible: boolean }).title
    }
  });

</script>

<template>
  <h1>Character Layout</h1>
  <NavBarComponent
    :show-icon="false"
    :links="routeLinks"
  />
  <!-- RouterVew + Suspense -->
  <RouterView />
</template>

<style scoped>

</style>