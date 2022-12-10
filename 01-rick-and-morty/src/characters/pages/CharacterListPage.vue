<script setup lang="ts">
import CardListComponent from '@/characters/components/CardListComponent.vue';
const props = defineProps<{ title: string, visible: boolean }>();
</script>

<template>
  <div>
    <h2>{{ props.title }}</h2>
    <CardListComponent />
  </div>
</template>

<style scoped>
</style>
