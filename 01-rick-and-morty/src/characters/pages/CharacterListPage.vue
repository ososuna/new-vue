<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import CardListComponent from '@/characters/components/CardListComponent.vue';
import type { CharacterResponse } from '@/characters/interfaces/character';
import characterStore from '@/store/characters.store';

const props = defineProps<{ title: string, visible: boolean }>();

const getCharactersCacheFirst = async() => {
  if (characterStore.characters.count > 0 ) {
    return characterStore.characters.list;
  }
  const { data } = await rickAndMortyApi.get<CharacterResponse>('/character');
  return data.results;
};


useQuery(
  ['characters'],
  getCharactersCacheFirst,
  {
    onSuccess( data ) {
      characterStore.loadedCharacters( data );
    },
    // onError( error ) {
    // }
  },
);


</script>

<template>
  <div>
    <p v-if="characterStore.characters.isLoading">Loading...</p>
    <div v-else-if="characterStore.characters.hasError">
      <h2>Error at loading</h2>
      <p>{{ characterStore.characters.errorMessage }}</p>
    </div>
    <template v-else>
      <h2>{{ props.title }}</h2>
      <CardListComponent :characters="characterStore.characters.list" />
    </template>
  </div>
</template>

<style scoped>
</style>
