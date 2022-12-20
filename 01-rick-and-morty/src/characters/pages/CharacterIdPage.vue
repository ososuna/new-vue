<script setup lang="ts">
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useCharacter from '@/characters/composables/useCharacter';

const route = useRoute();
const router = useRouter();
const { id } = route.params as { id: string };

const { character, errorMessage, hasError, isLoading } = useCharacter( id );

watch( isLoading, () => {
  if (!isLoading.value && hasError.value) {
    router.replace('/characters');
  }
});

</script>

<template>
  <h3 v-if="isLoading">Loading...</h3>
  <h3 v-else-if="hasError">{{ errorMessage }}</h3>
  <div v-else-if="character">
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
