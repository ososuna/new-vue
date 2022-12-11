<script setup lang="ts">
import { ref } from 'vue';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { CharacterResponse, Character } from '@/characters/interfaces/character';

const characters = ref<Character[]>([]);

rickAndMortyApi.get<CharacterResponse>('/character')
  .then(({ data }) => {
    characters.value = data.results;
  });

</script>

<template>
  <ul>
    <li
      v-for="{ id, name } of characters"
      :key="id"
    >
      {{ name }}
    </li>
  </ul>
</template>

<style scoped>

</style>