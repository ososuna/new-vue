<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import CardListComponent from '@/characters/components/CardListComponent.vue';
import type { CharacterResponse } from '@/characters/interfaces/character';
import characterStore from '@/store/characters.store';

const props = defineProps<{ title: string, visible: boolean }>();

const getCharacters = async() => {
  const { data } = await rickAndMortyApi.get<CharacterResponse>('/character');
  return data.results;
};

const { isLoading, data } = useQuery(
  ['characters'],
  getCharacters,
  {
    onSuccess( data ) {
      characterStore.loadedCharacters( data );
    }
  }
);


</script>

<template>
  <div>
    <p v-if="characterStore.characters.isLoading">Loading...</p>
    <template v-else>
      <h2>{{ props.title }}</h2>
      <CardListComponent :characters="characterStore.characters.list" />
    </template>
  </div>
</template>

<style scoped>
</style>
