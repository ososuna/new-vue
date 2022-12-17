<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useQuery } from '@tanstack/vue-query';
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

const { data: character } = useQuery(
  ['character', id],
  () => getCharacterCacheFirst(id),
  {
    onSuccess: ( character ) => {
      characterStore.loadedCharacterById( character );
    }
  }
)

</script>

<template>
  <h3 v-if="!character">Loading...</h3>
  <div v-else>
    <h1>{{ character.name }}</h1>
    <div class="character-container">
      <img :src="character.image" :alt="character.name">
      <ul>
        <li>Origin: {{ character.origin.name }}</li>
        <li>Gender: {{ character.gender }}</li>
        <li>Location: {{ character.location.name }}</li>
        <li>Species: {{ character.species }}</li>
        <li>Status: {{ character.status }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.character-container {
  display: flex;
  flex-direction: row;
}

img {
  width: 150px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
}
</style>