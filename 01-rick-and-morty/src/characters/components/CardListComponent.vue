<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import rickAndMortyApi from '@/api/rickAndMortyApi';
// import { useCharacters } from '@/characters/composables/useCharacters';
import CardComponent from '@/characters/components/CardComponent.vue';
import type { Character, CharacterResponse } from '@/characters/interfaces/character';

// 1. Normal suspense
// const { data } = await rickAndMortyApi.get<Character[]>('/character');
// const characters = data.results;

// 2. Composable functions
// const { isLoading, characters, hasError, errorMessage } = useCharacters();

// 3. TanStack Query
const getCharactersSlow = async():Promise<Character[]> => {
  return new Promise( (resolve) => {
    setTimeout( async() => {
      const { data } = await rickAndMortyApi.get<CharacterResponse>('/character');
      resolve( data.results );
    }, 1);
  });
  
}
const { isLoading, isError, data: characters, error } = useQuery(
  ['characters'],
  getCharactersSlow,
  {
    cacheTime: 1000 * 60,
    refetchOnReconnect: 'always'
  }
);
</script>

<template>
  <h3 v-if="isLoading">Loading...</h3>
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