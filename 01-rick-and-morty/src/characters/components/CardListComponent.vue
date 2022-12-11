<script setup lang="ts">
import CardComponent from '@/characters/components/CardComponent.vue';
import type { Character } from '@/characters/interfaces/character';

defineProps<{ characters: Character[] }>();

</script>

<template>
  <div class="card-list">
    <CardComponent
      v-for="character of characters"
      :key="character.id"
      :character="character"
    />
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>