<script setup lang="ts">
import rickAndMortyApi from '@/api/rickAndMortyApi';
// import { useCharacters } from '@/characters/composables/useCharacters';
import { useQuery } from '@tanstack/vue-query';
import type { Character, CharacterResponse } from '@/characters/interfaces/character';

// 1. Normal suspense
// const { data } = await rickAndMortyApi.get<Character[]>('/character');
// const characters = data.results;

// 2. Composable functions
// const { isLoading, characters, hasError, errorMessage } = useCharacters();

// 3. TanStack Query
const getCharactersSlow = async():Promise<Character[]> => {
  const { data } = await rickAndMortyApi.get<CharacterResponse>('/character');
  return data.results;
}
const { isLoading, isError, data: characters, error } = useQuery(
  ['characters'],
  getCharactersSlow,
);

</script>

<template>
  <h3 v-if="isLoading">Loading...</h3>
  <h3 v-if="isError">{{ error }}</h3>
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