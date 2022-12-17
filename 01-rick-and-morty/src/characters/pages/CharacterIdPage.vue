<script setup lang="ts">
import { useRoute } from 'vue-router';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import type { Character } from '@/characters/interfaces/character';
import characterStore from '@/store/characters.store';

const route = useRoute();
const { id } = route.params as { id: string };

const getCharacterCacheFirst = async( characterId: string ): Promise<Character> => {
  if (characterStore.checkIdInStore( characterId )) {
    return characterStore.ids.list[characterId];
  }
  const { data } = await rickAndMortyApi.get<Character>(`/character/${characterId}`);
  return data;
}

</script>

<template>
  <div>
    <h1>Character #{{ id }}</h1>
  </div>
</template>

<style scoped>

</style>