<script setup lang="ts">
import { useCharacters } from '@/characters/composables/useCharacters';
const { isLoading, characters, hasError, errorMessage } = useCharacters();
</script>

<template>
  <h3 v-if="isLoading">Loading...</h3>
  <h3 v-if="hasError">{{ errorMessage }}</h3>
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